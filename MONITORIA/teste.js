function calcular(){
	var nota1 = parseFloat(document.forms.media.nota1.value);
	var nota2 = parseFloat(document.forms.media.nota2.value);
	var media = (nota1 + nota2)/2;
	alert (media);
	if (media < 6){
		document.querySelector("#ruim").style.backgroundColor = "red";
		document.querySelector("#boa").style.backgroundColor = "green";
	}
	else{
		document.querySelector("#boa").style.backgroundColor = "green";
		document.querySelector("#ruim").style.backgroundColor = "red";	
	}		
}