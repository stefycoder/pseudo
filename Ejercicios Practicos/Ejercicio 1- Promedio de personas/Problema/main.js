function promedio(){
	var npersonas,estatura,i,suma;
	npersonas=prompt("Ingresa el número de personas ha promediar la estatura: ");
	suma=0;
	for(i=1;i<=npersonas;i++){
		estatura=prompt("Ingresa la estatura de la persona "+i+": ");
		suma=suma+parseInt(estatura);
	}
	alert("El promedio de estatura es: " +suma/npersonas);
}
promedio()

