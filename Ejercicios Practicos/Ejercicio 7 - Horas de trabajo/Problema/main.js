function sueldo(){
	var pago=parseInt(prompt("¿Cuánto es el pago por hora del trabajador?"));
	var totalHoras=0;
	for (i=1;i<=6;i++){
		horas=parseInt(prompt("Ingresa las horas trabajadas el día "+i+" :"));
		totalHoras=totalHoras+horas;
	}
	document.write("El trabajador cumplió con "+totalHoras+" horas en la semana, por tanto, se le debe pagar s/."+(totalHoras*pago));
}

sueldo();
