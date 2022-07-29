const express = require("express");
const router = express.Router();
let brandsDB = require("../utils/products");
const { user, auth } = require("../middleware/admin");

/************************************************************* 
	GET
http://localhost:3000/api/product/Logitech/1
 ************************************************************/

router.get("/product", (req, res) => {
  res.json(brandsDB);
});

/**
middleware a nivel de rutas: 
definimos una ruta, y le podemos pasar diferente middleares,
en este caso utilizamos las dos funciones que definimos en el archivo
"../middleware/admin"

 */
// esto no tiene test
router.get("/user", user, auth, (req, res) => {
  console.log(res.locals);
});

// router.get("/product", (req, res) => {
// 	res.json(brandsDB);
// });

// Si se encuenta el producto,devuelve un objeto con:
//brand , el nombre de la marca
//description, la descripcion de la marca
//product, el producto entero que corresponde a esa marca
router.get("/product/:brand/:productId?", (req, res) => {
  const { brand, productId } = req.params;
  if (productId) {
    const ProductsBranch = brandsDB.find((b) => b.name === brand);
    const product = ProductsBranch.products.find(
      (b) => b.id === parseInt(productId)
    );
    res.json({
      brand: ProductsBranch.name,
      description: ProductsBranch.description,
      product,
    });
  } else {
    const ProductsBranch = brandsDB.find((b) => b.name === brand);
    res.json(ProductsBranch);
  }
});

/**
POST

http://localhost:3000/api/product
 */
/**
 * El metodo post debe poder agregar un nuevo objeto
 *  con los atributos id,name,description
 * 	al agregarlos, debe responder con un objeto
 *  que contenga los atributos message : "Marca agregada"
 * 	y brand : <nombre de la marca agregada>
 * 	Ej: {message : "Marca agregada",brand: "Iphone"}
 * */

router.post("/product", (req, res) => {
  const { name, description } = req.body;
  if (name && description) {
    const newProduct = {
      id: brandsDB[brandsDB.length - 1].id + 1,
      name,
      description,
    };
    brandsDB = [...brandsDB, newProduct];
    res.json({ message: "Marca agregada", brand: `${name}` });
  } else {
    res.status(400).json({ message: "información incompleta del producto" });
  }
});

/**
	PUT
http://localhost:3000/api/product/2
 */
/**
 * Este método deberia buscar el id pasado por params
 * dentro del array de productos y reemplazar el nombre
 * de la brand por el nombre que llega por body
 */
router.put("/product/:id", (req, res) => {
  const { id } = req.params;
  const { brand } = req.body;
  if (brand) {
    let brandProducts = brandsDB.find((b) => b.id === parseInt(id));
    brandProducts.name = brand;
    res.json({ message: "Producto Actualizado" });
  }
});

/**
		DELETE
http://localhost:3000/api/product/1
 */

/**
 * Este método debe poder eliminar un producto
 */
router.delete("/product/:id", (req, res) => {
  const { idBranch } = req.body;
  const { id } = req.params;
  let brandProducts = brandsDB.find((b) => b.id === parseInt(idBranch));
  let otherBrands = brandsDB.filter((b) => b.id !== parseInt(idBranch));
  let productsBrand = brandProducts.products.filter(
    (p) => p.id !== parseInt(id)
  );
  const product = brandProducts.products.find((p) => p.id === parseInt(id));

  brandProducts.products = productsBrand;
  brandsDB = { ...otherBrands, brandProducts };
  res.json({ message: "Producto Eliminado", product });
});

//expressjs.com/es/starter/hello-world.html
module.exports = { router };
