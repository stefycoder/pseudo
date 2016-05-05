function mayorCero(){
	var cantidad=parseInt(prompt("Ingresa la cantidad de número a evaluar "));
	var contador = 0;
	for(i=1;i<=cantidad;i++){
		numero=parseInt(prompt("Ingresa el "+i+" : "));
		if(numero>0)
			contador++;
	}
	document.write("Hay un total de "+contador+" números mayores a cero.");
}
mayorCero();