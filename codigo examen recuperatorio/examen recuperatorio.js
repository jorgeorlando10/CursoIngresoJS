/*1-realizar el algoritmo que lea la base por ID de un cuadrado e informar la superficie del mismo por alert.*/


function Mostar()
{
	var base;
	var resultado;
	base=document.getElementById("base1").value;
	base=parseInt(base);
	resultado=base*base
	alert("la superficie es:"+resultado)
}

..............................................

/*2-realiazar el algoritmo que lea un importe de un producto por prompt y muestre el importe final
descontando un (25%) por fin de temporada*/
function Mostar()
{
	var importe;
	var resultado;
	importe=prompt("importe");
	resultado=importe-((importe*25)/100);
	alert("el importe final:"+resultado )
	
}
.....................................................

/*3- realizar el algoritmo que tome por ID tres datos: precio1, precio2 y precio3 de una compra y luego que
muestre la suma y el promedio de los precios.*/


function Sumar () 
{
	
	var preUno;
	var preDos;
	var preTres;
	var resultado;
	preUno=document.getElementById("PrecioUno").value;
	preUno=parseInt(preUno);
	preDos=document.getElementById("PrecioDos").value;
	preDos=parseInt(preDos);
	preTres=document.getElementById("PrecioTres").value;
	preTres=parseInt(preTres);
	resultado=preUno+preDos+preTres;
	alert("la suma es:"+resultado)

}
function Promedio () 
{
	var preUno;
	var preDos;
	var preTres;
	var resultado;
	preUno=document.getElementById("PrecioUno").value;
	preUno=parseInt(preUno);
	preDos=document.getElementById("PrecioDos").value;
	preDos=parseInt(preDos);
	preTres=document.getElementById("PrecioTres").value;
	preTres=parseInt(preTres);
	resultado=(preUno+preDos+preTres)/3;
	alert("el promedio es:"+resultado)
}

/*5- (SWITCH) realizar el algoritmo que pida un MES por prompt, si es “Diciembre” informar por alert “Se
vienen las fiestas” ,si es “Enero” informar por alert “comienza el año”, de lo contrario informar por alert
“no es enero, ni diciembre” .*/

unction Mostar()
{
	var text;
	var mesDelAño=prompt("escriba el mes aqui");
switch(mesDelAño) {

        case "diciembre":
        alert("se vienen las fiestas!!")
        break;
   
   		   case "enero":
        alert("comienza el año")
        break;

   		case "febrero":
      case "marzo":
      case "abril":
      case "mayo":
      case "junio":
      case "julio":
      case "agosto":
      case "septiembre":
      case "octubre":
      case "noviembre":
  		alert("NO es diciembre ni enero") 
   		break;
   }
}   