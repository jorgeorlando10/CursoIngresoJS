function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	var promedio;

  while(respuesta=="si")
  {

	
  
 	contador++;
 	numero=prompt("ingrese numero");
 	numero=parseInt(numero);
 	acumulador+=numero;
 	respuesta=prompt("deseo seguir");
 }

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN