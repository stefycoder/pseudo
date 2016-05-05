function calcularGastoFabricacion(materiaPrima,tipoProducto) {
	var costoGastoFabricacion = null;
	if (tipoProducto === 2 || tipoProducto === 5) {
		costoGastoFabricacion = 0.30 * materiaPrima;
	}
	if (tipoProducto === 3 || tipoProducto === 6) {
		costoGastoFabricacion = 0.35 * materiaPrima;
	}
	if (tipoProducto === 1 || tipoProducto === 4) {
		costoGastoFabricacion = 0.28 * materiaPrima;
	}
	return costoGastoFabricacion;
}

function calcularManoObra(materiaPrima,tipoProducto) {
	var costoManoObra = null;
	if (tipoProducto === 3 || tipoProducto === 4) {
		costoManoObra = 0.75 * materiaPrima;
	}
	if (tipoProducto === 1 || tipoProducto === 5) {
		costoManoObra = 0.80 * materiaPrima;
	}
	if (tipoProducto === 2 || tipoProducto === 6) {
		costoManoObra = 0.85 * materiaPrima;
	}
	return costoManoObra;
}

function calcularCostoProduccion(materiaPrima,tipoProducto) {
	return materiaPrima + 
		   calcularManoObra(materiaPrima,tipoProducto) +
		   calcularGastoFabricacion(materiaPrima,tipoProducto);
}

function calcularPrecioVenta(materiaPrima,tipoProducto) {
	var costoProduccion = calcularCostoProduccion(materiaPrima,tipoProducto);
	return parseFloat((costoProduccion * 1.45).toFixed(2));
}

console.log(calcularPrecioVenta(300,1));
console.log(calcularPrecioVenta(180,4));
console.log(calcularPrecioVenta(100,6));