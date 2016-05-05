function calcular_costo_bus(tipo_bus) {
	var costo_bus = null;
	switch (tipo_bus) {
		case 'A':
			costo_bus = 2.0;
			break;
		case 'B':
			costo_bus = 2.5;
			break;
		case 'C':
			costo_bus = 3.0;
	}
	return costo_bus;
}

function ajustar_numero_personas(numero_personas) {
	if (numero_personas <= 20) {
		numero_personas = 20;
	}
	return numero_personas;
}


function calcular_costo_total(kilometros, tipo_bus, numero_personas) {
	var costo_bus = calcular_costo_bus(tipo_bus);
	var numero_personas = ajustar_numero_personas(numero_personas);

	costo_total = numero_personas * costo_bus * kilometros;
	return costo_total;
}

function calcular_costo_persona(costo_total,numero_personas) {
	return costo_total / numero_personas;
}

function calcular(kilometros, tipo_bus, numero_personas) {
	var costo_total = calcular_costo_total(kilometros,tipo_bus,numero_personas);
	var costo_persona = calcular_costo_persona(costo_total,numero_personas);

	console.log("Datos entrada(kilometros: "+kilometros+",tipo_bus: "+tipo_bus+", numero_personas: "+numero_personas+")");
	console.log("costo total: " + costo_total);
	console.log("costo persona: " + costo_persona);
}

calcular(300,"A",15);
calcular(200,"B",25);
calcular(1024,"C",45);
calcular(300,"D",1);