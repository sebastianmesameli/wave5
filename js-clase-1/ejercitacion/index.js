/*******************************************************************************

Realizar una función llamada “calculatePrice” que reciba dos parámetros,
el primero siendo el nombre de un producto (ej: "Laptop""), y el segundo 
el precio de ese producto (sin el signo $). Dicha función deberá retornar 
un string con el nombre del producto, el costo del envío del mismo, y el precio final.

Ejemplo:
calculatePrice("play", 30000)

output : "el costo de envio de una play es de 500 pesos y el precio total seria de 30500 pesos"
*******************************************************************************/
//Tu código acá
const calculatePrice = (product, price) => {
  let shippingPrice = 0;
  if (price <= 0) return 'Error';
  if (!product || !price) return "ingresar ambos parámetros";
  if (typeof product !== "string") return "ingresar un nombre válido";
  if (price > 4000) {
    shippingPrice = 700;
  } else if (price > 2000) {
    shippingPrice = 500;
  } else if (price > 0) {
    shippingPrice = 300;
  }
  const totalPrice = price + shippingPrice;
  return `el costo de envio de una ${product} es de ${shippingPrice} pesos y el precio total seria de ${totalPrice} pesos`;
};

module.exports = {
  calculatePrice,
};
