/**
 * Calculadora
 */

let mostrado = false;
 function anyadirValor(form, valor){
	 if(mostrado){
		 form.resultadoOperacion.value = "";
		 mostrado = false;
	 }
	 	
	 if(valor == '='){
		 let resultado = form.resultadoOperacion.value;
		 form.resultadoOperacion.value += "= " + eval(resultado);
		 mostrado = true;
	 }
	 else{
		 if(form.resultadoOperacion.value == 0)
		 	form.resultadoOperacion.value = valor;
		 else
		 	form.resultadoOperacion.value += valor;
	 }
 }