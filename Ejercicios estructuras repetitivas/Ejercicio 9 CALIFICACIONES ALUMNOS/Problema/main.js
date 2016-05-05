//Escribe aquí tú código
document.write("CALIFICACIONES ALUMNOS"+ '<br>');
var n=4;
var menor=1000;
var suma=0;
for(i=1;i<=4;i++){
    nota=Number(prompt('Ingrese nota'+i));
    if(nota<menor){
        menor=nota;
        }
else{
    menor=menor;
}
suma=suma+nota;}
promedio=suma/n;
document.write("promedio notas:"+promedio+'<br>'+"la más baja calificacion es:"+ menor);
