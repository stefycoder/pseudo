//Escribe aquí tú código
document.write("TABLAS DE MULTIPLICAR"+ '<br>');
n=Number(prompt('Ingrese el número que desee para obtener su tabla de multiplicar '));
for(i=0; i<=9 ; i++){
    producto=n*i;
    document.write(n + "x"+ i +"="+ producto +'<br>');

}
