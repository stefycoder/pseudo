function almacen(){
	var costo = Number(prompt("Ingrese el costo de la prenda: "))

	if (costo >= 2500){
		costo = costo - (costo * 15/100);
		document.write("Usted tiene un descuento del 15%","<br>");
		document.write("Usted pagará: ",costo," " ,"dólares");
	}
	else{
		costo = costo - (costo * 8/100);
		document.write("Usted tiene un descuento del 8%","<br>");
		document.write("Usted pagará: ",costo," " ,"dólares");
	}
}
almacen()