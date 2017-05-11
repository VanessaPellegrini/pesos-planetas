function calcular_peso(){
	var peso = document.getElementById('peso').value;
	var planeta = document.getElementById("planeta").value;

	if(planeta == "mercurio"){
		return alert("Tu peso en Mercurio es de: " + ((parseInt(peso) * 3.7) / 9.8).toFixed(3) + "kg");
	}
	else if(planeta == "venus"){
		return alert("Tu peso en Venus es de: " + ((parseInt(peso) * 8.87) / 9.8).toFixed(3) + " Kg");
	}
	else if(planeta =="marte"){
		return alert("Tu peso en Marte es de: " +((parseInt(peso) * 3.71) / 9.8).toFixed(3) + " Kg");
	}
	else if(planeta =="jupiter"){
		return alert("Tu peso en Jupiter es de: " +((parseInt(peso) * 24.79) / 9.8).toFixed(3) + " Kg");
	}	
	else if(planeta == "saturno"){
		return alert("Tu peso en Saturno es de: " + ((parseInt(peso) * 10.44) / 9.8).toFixed(3) + " Kg");
	}
	else if(planeta == "urano"){
		return alert("Tu peso en Urano es de: " + ((parseInt(peso) * 8.69) / 9.8).toFixed(3) + " Kg");
	}
	else if(planeta =="neptuno"){
		return alert("Tu peso en Neptuno es de: " +((parseInt(peso) * 11.15) /9.8).toFixed(3) + " Kg");
	}	
	else if(planeta =="pluton"){
		return alert("Tu peso en Pluton es de: " +((parseInt(peso) * 0.62) / 9.8).toFixed(3) + " Kg");

	}
}
