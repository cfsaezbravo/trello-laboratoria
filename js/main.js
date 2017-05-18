function nuevaLista(){

	var añadirLista = document.getElementById("añadir-lista").value;
	var botoncito = document.getElementById("añadir-titulo");
	añadirLista.addEventListener("click", function(){
		alert("Está funcionando");
	})
};

nuevaLista();