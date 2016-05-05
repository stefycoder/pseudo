function viajeesx(){
	var cantidadAlumnos = Number(prompt("Ingrese la cantidad de alumnos"));
	var costoTotal;
	var costoporAlumno;

	document.write("La cantidad de alumnos ingresada es de: ", cantidadAlumnos,"<br>");

	if(cantidadAlumnos>=100){
		costoTotal = cantidadAlumnos * 65;
		document.write("El costo por alumno es de 65.00 dólares","<br>");
		document.write("El costo total es de ", costoTotal,"<br>");

	}

	if(cantidadAlumnos>=50 && cantidadAlumnos<=99){
		costoTotal = cantidadAlumnos * 70;
		document.write("El costo por alumno es de 70.00 dólares","<br>");
		document.write("El costo total es de ", costoTotal,"<br>");
	}

	if(cantidadAlumnos>=30 && cantidadAlumnos<=49){
		costoTotal = cantidadAlumnos * 95;
		document.write("El costo por alumno es de 95.00 dólares","<br>");
		document.write("El costo total es de ", costoTotal,"<br>");
	}

	if(cantidadAlumnos<30){
		costoporAlumno = 4000 / cantidadAlumnos;
		document.write("El costo por alumno es de: ",costoporAlumno,"<br>");
		document.write("El costo total es de 4000 dólares","<br>");
	}
}
viajeesx()