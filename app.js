const express = require("express");
const app = express();
const port = 8080;
app.listen(port, function(){
	console.log("Running port ", port);

	console.log("Escribe una linea que imprima tu nombre abajo de esta.");
	console.log("Lucia Guadalupe Angulo Flores");

	console.log("Kevin Carmona Serrano")
	
	console.log("Jose Andres Herrera Perez");
	console.log("Nephtali Palillero Perez");
})