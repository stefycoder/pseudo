var kw = prompt("ingresa tu consumo");
var consumo = null;
if(kw > 0 && kw < 50){
	consumo = kw;
} else if (kw > 50 && kw <= 100) {
	consumo = 50 + (kw - 50)
}else if (kw > 100) {
	consumo = 150 + (kw -100)*3;
}
for (var i = 1;i <=kw; i++){
	console.log(i);
	if (i <= 50) {
		consumo += 1;
	} else if (i <= 100) {
		consumo += 2;
	} else{
		consumo += 3;
	}
}
alert("el consumo es " + consumo)