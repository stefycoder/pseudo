function posi(){
	var numero = Number(prompt("Ingrese el número"));
	if(numero<0){
		document.write("El número es negativo");
	}

	else{
		document.write("El número es positivo");
	}
}

posi()