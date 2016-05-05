function Hamburguesa(tipo) {
	var costo = null;
	switch(tipo) {
		case "sencillas":
			costo = 20.00;
			break;
		case "dobles":
			costo = 25.00;
			break;
		case "triples":
			costo = 28.00;
			break;		
	}
	return costo;
}

function CostoTotal(cantidad,tipoHamburguesa,tarjeta) {
	var costoHamburguesa = Hamburguesa(tipoHamburguesa);
	if (tarjeta) {
		costoHamburguesa *= 1.05;
	}
	return cantidad * costoHamburguesa;
}

console.log(CostoTotal(10,"sencillas",true));
console.log(CostoTotal(20,"dobles",true));
console.log(CostoTotal(2,"triples",false));