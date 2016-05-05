function ajustar(numero_personas) {
	if (numero_personas <= 20) {
		numero_personas = 20;
	}
	return numero_personas;
}
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
			break;
	}
	return costo_bus;
}
function calcular_costo_persona(numero_personas) {
	return  costo_total / numero_personas;
}
function calcular_costo_total(kilometros, tipo_bus, numero_personas) {
	var costo_bus = calcular_costo_bus(tipo_bus);
	var numero_real_personas = numero_personas(numero_personas);
	costo_total = numero_personas * costo_bus * kilometros;
	return costo_total;
}
function calcular (kilometros, tipo_bus, numero_personas) {
	var costo_total = calcular_costo_total(kilometros, tipo_bus, numero_personas);
	var costo_persona = calcular_costo_persona(costo_total, numero_personas);
	console.log("Datos de entrada: " + kilometros + " kilometros, tipo de bus: '" + tipo_bus + "' y el número de personas: " + numero_personas);
	console.log("costo total: " + costo_total);
	console.log("costo persona: " + costo_persona);
}
calcular(300, 'A', 15);
calcular(200, 'A', 25);
calcular(1024, 'A', 45);

