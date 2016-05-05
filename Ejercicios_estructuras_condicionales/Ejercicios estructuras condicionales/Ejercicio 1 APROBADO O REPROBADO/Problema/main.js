function nota(){
	var nota = prompt("Ingrese la nota");
	if (nota >= 6 && nota<=10){
		document.write("Usted está aprobado");
	}

	else{
		document.write("Usted esta reprobado");
	} 
	
}
nota()