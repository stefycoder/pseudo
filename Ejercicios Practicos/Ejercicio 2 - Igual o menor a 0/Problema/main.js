function cantidades(){
	var cantidad = parseInt(prompt("Ingresar la cantidad de número que ha evaluar"));
	var contador = 0;
	for(i=1;i<=cantidad;i++){
		numero=parseInt(prompt("Ingresa el número "+i+" : "));
		if(numero<=0)
			contador++;
	}
	document.write("Hay un total de "+contador+" numeros menores iguales a cero y "+(cantidad-contador)+" mayores a cero");
}
cantidades()