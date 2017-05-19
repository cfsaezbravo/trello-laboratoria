(function(){

	//Variables
	var lista = document.getElementById("lista");
	var tareaInput = document.getElementById("tareaInput");
	var botonNuevaTarea = document.getElementById("btn-agregar");
 
	//Funciones
	var agregarTarea = function(){
		var tarea = tareaInput.value;
		var nuevaTarea = document.createElement("div");
		var enlace = document.createElement("a");
		var contenido = document.createTextNode(tarea);

	//Agregamos el contenido al enlace
	enlace.appendChild(contenido);
 	enlace.setAttribute("href", "#");
 	nuevaTarea.appendChild(enlace);
 	lista.appendChild(nuevaTarea);

 	tareaInput.value = "";
	};

	var comprobarInput = function(){
		
	}

	var eliminarTarea = function(){
		
	}
 
	// Agregar Tarea
	botonNuevaTarea.addEventListener("click", agregarTarea);
 
	// Comprobar Input
	tareaInput.addEventListener("click", comprobarInput);
}());