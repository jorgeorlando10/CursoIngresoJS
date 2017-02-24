

1//realizar el algoritmo que lea la base por ID de un cuadrado e informar el perímetro del mismo por alert
function Mostar()
{
	var base;
	var resultado;
	base=document.getElementById("base1").value;
	base=parseInt(base);
	resultado=base*4
	alert("el perimetro es:"+resultado)
}

2//realizar el algoritmo que lea un importe por de un producto por prompt y muestre el importe final
//sumándole el IVA (21%).
function Mostar()
{
	var importe;
	var resultado;
	importe=prompt("importe");
	resultado=importe*1.21;
	alert("el importe final:"+resultado )
	
}

3//realizar el algoritmo que tome por ID dos datos, el largo y ancho de un terreno y luego que muestre
//cuantos metros de alambre se necesitan para colocarle 3 hilos de alambrado a su perímetro.

function Mostar()
{
	
	var largo;
	var ancho;
	var resultado;
	largo=document.getElementById("Largo").value;
	largo=parseInt(largo);
	ancho=document.getElementById("Ancho").value;
	ancho=parseInt(ancho);
	resultado=(largo+ancho)*2*3
	alert("se necesitan:"+resultado+"metros de alambre")

    
 
}

/*4- (IF) realizar el algoritmo que pida dos números por prompt, si son iguales que los multiplique, si el
primero es mayor al segundo que los reste y si no que los sume, mostrar el resultado por document.write.*/

function Mostrar()
{
 	var numeroUno;
 	var numeroDos;
 	var resultado;

 	numeroUno=prompt("ingrese el numero uno");
 	numeroUno=parseInt(numeroUno);
	numeroDos=prompt("ingrese el numero Dos");
	numeroUno=parseInt(numeroDos);
	if(numeroUno==numeroDos)
	{			
	resultado=(numeroUno*numeroDos)
	document.write("es resultado es:"+resultado+)
	}
	else if(numeroUno> numeroDos)
	{
 	resultado=(numeroUno+numeroDos)					
 	document.write("es resultado es:"+resultado+)
	
 	}
 	else
 	{
 	resultado=(numeroUno+numeroDos)					
 	document.write("es resultado es:"+resultado+)
	}
}

/*5- (SWITCH)realizar el algoritmo que pida un día de la semana por prompt, si es un “Sábado” o “Domingo”
informar por alert “es fin de semana” de lo contrario informar por alert “a trabajar !!!” .
*/
function Mostar()
{
	var text;
	var diaDeSemana=prompt("escriba el dia aqui");
switch(diaDeSemana) {

        case "lunes":
        case "martes":
       	case "miercoles":
        case "jueves":
        case "viernes":
        alert("a trabajar!!")
        break;
   
   		case "sabado":
   		case "domingo":
  		alert("es fin de semana") 
   		break
   }
}   

