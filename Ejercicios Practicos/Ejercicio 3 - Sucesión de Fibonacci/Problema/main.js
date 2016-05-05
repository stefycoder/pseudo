function fibonacci(){
	var terminos = Number(prompt("Ingrese la cantidad de términos"));
	var i=1,j=1,contador=3;
	
	document.write(i, "<br>");
	document.write(j, "<br>");
	
	while(contador<=terminos){
		k=i+j;
		i=j;
		j=k;
		
	document.write(k, "<br>");
		contador++;
	}
}

fibonacci();