function num(){
	var a = Number(prompt("Ingrese la cantidad A "));
	var b = Number(prompt("Ingrese la cantidad B"));
	if (a>b){
		document.write("La cantidad mayor es la A");
	}
	else{
		document.write("La cantidad mayor es la B")
	}
}

num()