function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var promedio;

while(contador<5)
{
	contador=contador+1;
	numero=prompt("numeros");
	numero=parseInt(numero);
	acumulador=acumulador+numero;

}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;


}//FIN DE LA FUNCIÓN