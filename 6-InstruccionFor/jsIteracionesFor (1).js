function Mostrar()
{

/*for(var contador=0 ; contador;)
	console.log(contador);
	contador++;
	if(contador==5)
}
	break;
}
*/
var contador=0;
var numero;
var numeroRandom;
var contador1=0;
var contador2=0;
var contador3=0;
var contador4=0;
var contador5=0;
var contador6=0;
var contador7=0;
var contador8=0;
var contador9=0;
var contador10=0;

for(;contador<100000 ; contador++)
{
	numeroRandom=Math.floor(Math.random()*(10-1)) + 1;
	console.log(contador);
	switch(numeroRandom)

	{

	case 1: 
	contador1;
	break;

	case 2: 
	contador2;
	break;

	case 3: 
	contador3;
	break;

	case 4: 
	contador4;
	break;

	case 5: 
	contador5;
	break;

	case 6:
	contador6;
	break;

	case 7:
	if (contador7==7)
	{
	continue;
	}

	contador7++;
	break

	case 7:
	contador7;
    break;

    case 8:
	contador8;
    break;

	case 9:
	contador9;
    break;

    case 10:
	contador10;
    break;
}
}
console.log("la cantidad de uno es "+contador1/contador*100+"%")
console.log("la cantidad de dos es "+contador2/contador*100+"%")
console.log("la cantidad de tres es "+contador3/contador*100+"%")
console.log("la cantidad de cuatro es "+contador4/contador*100+"%")
console.log("la cantidad de cinco es "+contador5/contador*100+"%")
console.log("la cantidad de seis es "+contador6/contador*100+"%")
console.log("la cantidad de siete es "+contador7/contador*100+"%")
console.log("la cantidad de ocho es "+contador8/contador*100+"%")
console.log("la cantidad de nueve es "+contador9/contador*100+"%")
console.log("la cantidad de diez es "+contador10/contador*100+"%")




}
