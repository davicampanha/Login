'use strict';
document.getElementById('toggleCheckbox').addEventListener('change', function() {
	var button = document.getElementById('myButton');
	button.disabled = !this.checked;
  });
  
function vale() {
	var user = document.getElementById('user').value;
	var pass = document.getElementById('pass').value;
	if (user === "ss01" && pass === "ss01") {
		alert("Oi, usuario");
		window.location.href = "https://www.msn.com/pt-br";
	} else if (user === "" && pass === "") {
		alert("Os 2 campos são obrigatorio")
	} else {
		alert("Impossivel Encontrar o seu Registro!!");
	}
};