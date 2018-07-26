function ver(obj){
	var aux = "";
	for (var indice in obj){
	aux = aux + indice + " -> " + obj[indice] + "<br>";
	}
	document.write(aux);
}

function teste (){
	// A variavel p é um objeto paragrfo
	var p = document.getElementById("p1");
	var div = document.getElementById("d1");
	//ver (p);
	p.innerHTML = "MUDADO!"; //qualquer tag pode ser usada
	p.style.backgroundColor = "black";
	p.style.color = "white";
	div.innerHTML = "DIV MUDADA!";
	div.style.backgroundColor = "pink";
	div.style.color = "purple";
	var btn = document.getElementById("b1");
	//ver(btn); //a página "some" por conta do document.write	
	btn.disabled = true;
}


//EX 1: AO CLICAR EM UM BOTÃO, UM ALERT DEVE APARECER.

//function ex(){var bt = document.getElementById("b2");//ver (bt); alert(bt.innerHTML);}
function ex1(bt){
	alert(bt.innerHTML);
	bt.style.backgroundImage = "";
}

//efeito clicado no botão
function clicar(img){
	if (img.src == "file:///E:/AULA%204%20JS/btoClicado.png")
		img.src = "bto.png";
	else 
		img.src = "btoClicado.png";
	//ver(img);
}

function inc(b4){
	b4.innerHTML = parseInt(b4.innerHTML) + 1;
} 
