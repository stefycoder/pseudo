function banquete(){
	var ndp = Number(prompt("Ingrese el número de comensales"));
	var costoTotal;
	document.write("El número total de comensales es de: ",ndp,"<br>")

	if(ndp>200 && ndp<=300){
		costoTotal = ndp * 85;
		document.write("El costo total es de: ",costoTotal," dólares");
	}

	if(ndp>300){
		costoTotal = ndp * 75;
		document.write("El costo total es de: ",costoTotal," dólares");
	}
	if(ndp<200){
		costoTotal = ndp * 95;
		document.write("El costo total es de: ",costoTotal," dólares");
	}
}
banquete()