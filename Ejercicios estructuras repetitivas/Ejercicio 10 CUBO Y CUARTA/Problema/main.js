//Escribe aquí tú código
document.write("CUBO Y CUARTA DE UN NÚMERO");
for (i =1; i <=10; i++) {
    n=Number(prompt('Ingresar número'+i));
    cubo=Math.pow(n,3);
    document.write('<br>'+"el cubo del numero "+n+" es:"+cubo);
    cuarta=Math.pow(n,4);
    document.write('<br>'+"la cuarta del numero "+n+" es:"+cuarta);
}
