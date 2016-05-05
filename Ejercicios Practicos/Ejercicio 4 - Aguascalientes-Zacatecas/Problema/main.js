function puntodeEncuentro(){
	var punto1=parseInt(prompt("Ingresar el primer punto"));
	var punto2=parseInt(prompt("Ingresar el segundo punto"));
	var x = (punto2-punto1)/2;
	document.write("El punto de encuentro será a los: ", punto1+x," metros");
}
puntodeEncuentro()