/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var resultado;
	resultado=2%10;
	alert(resultado);
	resultado=10%2;
	alert(resultado);
 var resultado;
 var divisor;
 var dividiendo;

dividiendo=document.getElementById("numeroDividendo").value;
divisor=.getElementById("numeroDivisor").value;
dividiendo=parseInt(dividiendo);
divisor=parseInt(divisor);
resultado=dividiendo%divisor;

}

