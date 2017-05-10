var contenedor = document.getElementById("contenedor");

function calcular(){
	var masa = document.getElementById("peso").value;
	var gravedad = document.getElementById("planetas").value;
	return alert("Tu peso sería " + (masa * gravedad).toFixed(2) + " kilos.");

}