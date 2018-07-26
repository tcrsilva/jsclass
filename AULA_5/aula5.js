function ver(obj){
	var aux = "";
	for (var indice in obj){
		aux = aux + indice + " - > " + obj[indice] + "<br>";
	}
	document.write(aux);
}

function teste(){
	var lis = document.getElementsByTagName("li");
	//ver(lis);
	//para percorrer a parte vermelha:
	for (i = 0; i < lis.length; i++){
		//alert(lis[i].innerHTML);
		lis[i].style.backgroundColor = "yellow";
		lis[i].innerHTML = "TESTE " + i;
	}
}

function testeCss(){
	var ps = document.querySelectorAll("p, li");
	for (var i=0; ps.length;i++){
		ps[i].style.backgroundColor = "pink";
	}
	//var p = document.querySelector("#p1")
	//var p = document.querySelector(".classe1");
	//p.style.backgroundColor = "yellow";
}

function Ex1(){
	var red = document.querySelectorAll("div, .classe2");
	for (var i=0; red.length;i++){
		red[i].style.backgroundColor = "red";
	}
}

function Ex2(){
	var clique = document.querySelector(".classe3")
	clique.innerHTML = "MUDADO" ;
}

//////////////////// SEGUNDA PARTE DA AULA (FORMULÁRIOS): 

function somarForm(){
	var n1 = parseInt(document.forms.form1.n1.value);
	var n2 = parseInt(document.forms.form1.n2.value);	
	//var soma = n1 + n2;
	var div  = document.querySelector("#res");
	div.innerHTML = n1+n2;
}

function somarIMC(){
	var peso = parseFloat(document.forms.form2.peso.value);
	var alt = parseFloat(document.forms.form2.alt.value);
	var imc = document.querySelector("#d1");
	var resp = document.querySelector("#d2");
	var calculo = peso / (alt*alt);
	imc.innerHTML =  "IMC: " + calculo;
		if (calculo < 18 ){
			resp.innerHTML = "Você está magro!";
		}else 
			if (calculo >= 18 && calculo < 25){
			resp.innerHTML = "Você está normal!";
		}else{
			resp.innerHTML = "Você está gordo!";	
		}		
}

function Validar(){
	var nome = document.forms.form3.nome.value;
	var idade = parseInt(document.forms.form3.idade.value);
	//alert(nome); //testar
	if (nome != ""){
		if(idade >= 18 && idade <= 120){
			alert("Cadastro Válido!");
		}
		else{
			alert("Cadastro Inválido!");
		}
	}
	else{
		alert("Campo Inválido!");
	}
	
}

//monitoria
function testar(){
	var divs = document.querySelectorAll(".myDiv");
	//var div = document.querySelector(".myDiv").innerHTML;
	
	for (var i; i < divs.length; i++){
		document.write(divs[i].innerHTML + "<br>");
	}
}
