function mayornum(){
	var a = Number(prompt("Ingrese primer número")); 
	var b = Number(prompt("Ingrese segundo número")); 
	var c = Number(prompt("Ingrese tercer número"));
	document.write("Las cantidades son "," ",a," ",b," ",c,"<br>");

	if (a>b && a>c){
		document.write("El mayor es el primero");
	}

	if (b>a && b>c){
		document.write("El mayor es el segundo");
	}

	if (c>a && c>b){
		document.write("El mayor es el tercero");
	}
	else{
		document.write("Las cantidades son iguales");
	}

}
mayornum()