(function(){

	//Variables
	var lista = document.getElementById("lista");
	var tareaInput = document.getElementById("tareaInput");
	var botonNuevaTarea = document.getElementById("btn-agregar");
 
	//Funciones
	var agregarTarea = function(){
		var tarea = tareaInput.value;
		var nuevaTarea = document.createElement("li");
		var enlace = document.createElement("a");
		var contenido = document.createTextNode(tarea);
 
	};

	var comprobarInput = function(){
		alert("comprobando input");
	}

	var eliminarTarea = function(){
		alert("eliminando tareas");
	}
 
	// Agregar Tarea
	botonNuevaTarea.addEventListener("click", agregarTarea);
 
	// Comprobar Input
	tareaInput.addEventListener("click", comprobarInput);
}());