let products = require("../utils/mock");
const express = require("express");

const router = express.Router();

// 1. Retornar todos los productos del array. “/api/products”,
router.get("/products/", (req, res) => {
  res.json(products);
});

//2. Obtener un producto específico mediante su ID “/api/products/:id”
router.get("/products/:id", (req, res) => {
  const { id } = req.params;
  let result = products.filter((p) => p.id === parseInt(id));
  res.json(result);
});

//3. Agregar un nuevo producto “/api/products”
router.post("/products/add", (req, res) => {
  const { name, price, quantity, colors } = req.body;
  let newProduct = { id: products.length + 1, name, price, quantity, colors };
  products = [...products, newProduct];
  res.json({
    msg: `Product ${name} add successfull`,
  });
});
//4. Cambiar alguna propiedad de un producto en particular ( Puede ser name, price, quantity o el que desees ) “/api/products/:id”,
router.put("/products/:id/:name", (req, res) => {
  const { id, name } = req.params;
  let product = products.find((p) => p.id === parseInt(id));
  product.name = name;
  res.json(product);
});
//5. Eliminar un producto mediante su ID “/api/products/:id”,
router.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  products = products.filter((p) => p.id !== parseInt(id));
  res.json(products);
});
module.exports = { router, products };
