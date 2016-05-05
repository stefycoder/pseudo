function ahorro(){
	var meses=prompt("Ingresasr el número de meses que ha ido ahorrando: ");
	suma = 0;
	for(i=1; i<=meses; i++){
		ahorro=prompt("Ingresa el ahorra en el mes "+i+" en soles: ");
		suma = suma + parseInt(ahorro);
	}
	document.write("El total ahorrado en los ", meses ," meses es: "+"S/. ",suma);
}
ahorro()