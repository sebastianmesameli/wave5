const express = require("express");
const router = express.Router();

/************************************************************* 
	EJERCICIO 
	1-Crear un endpoint que utilice el método GET y 
	devuelva como respuesta el mensaje “¡Hola mundo!”. 
	2-Probar que el mensaje llega al navegador.
	http://localhost:3000/api/
 ************************************************************/
// Tu código acá
router.get("/", (req, res) => {
	res.status(200).send("¡Hola mundo!");
});

/*************************************************************
	EXTRA
	1-Crear un array de productos usando la variable products
	2-Crear otro método Get cuya ruta sea '/products'
	3-Responder con el array al ingresar a '/products'
	http://localhost:3000/api/products
 *************************************************************/
// Tu código acá
let products = [
  { id: 1, name: "Laptop", price: 2000 },
  { id: 2, name: "Airpods", price: 400 },
  { id: 3, name: "Mouse", price: 200 },
];
// params-----------
router.get('/products/:id', (req,res)=>{
	const {id} = req.params;
	console.log("ID: ",id);
	let result = products.find(product => product.id == id);
	res.json({result});
})
//query-------------
router.get('/products', (req,res)=>{
	const {name, marca} = req.query;
	if(name || marca){
		let result = products.find(product => product.name === name);
		res.json({result});
	}
	else {
		res.json({products});
	}
})
//expressjs.com/es/starter/hello-world.html
module.exports = { router, products };
