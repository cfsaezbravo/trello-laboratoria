(function(){

	//Variables
	var lista = document.getElementById("lista");
	var tareaInput = document.getElementById("tareaInput");
	var botonNuevaTarea = document.getElementById("btn-agregar");
 
	//Funciones
	var agregarTarea = function(){
		var tarea = tareaInput.value;
		var nuevaTarea = document.createElement("div");
		var enlace = document.createElement("h2");
		var boton = document.createElement("input");
		var tareaLista = document.createElement("textarea");
		var contenido = document.createTextNode(tarea);

	//Agregamos el contenido al enlace
	enlace.appendChild(contenido);
	enlace.appendChild(boton);
	enlace.appendChild(tareaLista);
 	enlace.setAttribute("class", "principal");
 	boton.setAttribute("type", "button");
 	boton.setAttribute("value", "Añadir");
 	boton.setAttribute("class", "boton");
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