/**
 * Clase Usuarios
 */

 class Usuarios{
	 // Constructores
	 constructor(email, nombre, passwd, fecha){
		 this._email = email;
		 this._nombre = nombre;
		 this._passwd = passwd;
		 this._fecha = fecha;
	 }
	 
	 // Getter y Setter
	 get email(){
		 return this._email;
	 }
	 set email(email){
		 this._email = email;
	 }
 	 get nombre(){
		 return this._nombre;
	 }
	 set nombre(nombre){
		 this._nombre = nombre;
	 }
 	 get passwd(){
		 return this._passwd;
	 }
	 set passwd(passwd){
		 this._passwd = passwd;
	 }
 	 get fecha(){
		return this._fecha;
	 }
	 set fecha(fecha){
		 this._fecha = fecha;
	 }
	 
	 // Métodos
 }
 
 let lista = [] // Lista donde guardaremos los usuarios
 
 // Creamos 4 usuarios y los añadimos a la lista
 lista.push(new Usuarios("frandanigd@gmail.com", "Francisco", "Orangutan2", new Date()));
 lista.push(new Usuarios("frandanigd2@gmail.com", "Daniel", "Orangutan21", new Date()));
 lista.push(new Usuarios("frandanigd3@gmail.com", "Isidro", "Orangutan22", new Date()));
 lista.push(new Usuarios("frandanigd4@gmail.com", "Jose", "Orangutan23", new Date()));
 
 /**
  * Funcion que comprueba que el usuario introducido es correcto
  */
 function compruebaUsu(form){
	 let emailUsu= form.emaiUsu.value;
	 let password = form.psswdUsu.value;
	 
	 // Recorremos la lista y comprobamos si existe algun Usuario con el email y la contraseña introducida
	 let ok = false;
	 for(let i=0; i < lista.length; i++){
		 if(lista[i].email == emailUsu && lista[i].passwd == password){
			 alert("El señor " + lista[i].nombre + " ha iniciado con éxito!!");
			 ok = true;
		 }
	 }
	 
	 if(!ok)
	 	alert("El email y/o contraseña son incorrectos!");
 }