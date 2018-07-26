
function calculaimc(){
var altura = parseFloat(document.forms.form1.altura.value);
var peso = parseFloat(document.forms.form1.peso.value);


var quadrado = (altura * altura);
var calculo = (peso/quadrado);

if(calculo<18.5){
alert("Você está magro com esse indice: " + calculo);
}
else if(calculo>=18.5 && calculo<24.9){
alert("Você está normal com esse indice: " + calculo);
}

else if(calculo>=25 && calculo<29.9) {
alert("Você está com sobrepeso com esse indice: " + calculo);
}
else if(calculo>=30 && calculo<39.9) {
alert("Você está com obesidade com esse indice: " + calculo);
}
else if (calculo>40)
alert("Você está com obesidade mórbida com esse indice: " + calculo);
}

function remover(){
  document.forms.form1.altura.value="";
  document.forms.form1.peso.value="";
}

function inserir(){
  if(document.querySelector("#infoTexto")==null){
    var div = document.querySelector("#form");
    var h1 = document.createElement("h1");
    h1.setAttribute("id", "infoTexto");
    //h1.style.color = "";
    h1.style.width="75%";
	  h1.style.backgroundColor="rgba(1,1,1,0.3)";
	  h1.style.marginRight = "auto";
    h1.style.marginLeft = "auto";
	  h1.innerHTML = "Índice de Massa Corporal: Trata-se de uma medida do peso de cada pessoa, sendo uma relação entre a massa da pessoa e a sua altura. Para determinar o IMC, basta dividir o peso do indivíduo (massa) pela sua altura ao quadrado. A massa deve ser definida em quilogramas (kg) e a altura em metros.";
	  div.parentNode.insertBefore(h1,div);
  }   
}

  function alterar(){
   var div = document.querySelector("#borda");
   var foto = document.createElement("img") ;
   foto.src="piramide.png";
   foto.style.width="50%";
    //var h1 = document.createElement("h1");
    //h1.img.src = "url(piramide.png)";
    div.parentNode.replaceChild(foto,div);
    
}

window.onload = function imagem(){
  var div= document.getElementById("borda");
  var body= document.querySelector("body");
  var texto = document.querySelector("#titulo");
  
  texto.style.fontSize="90px";
  body.style.textAlign= "center";
  //div.style.borderStyle="ridge";
  div.style.marginLeft="25%";
  div.style.width="50%";
  body.style.fontWeight="bold";
  body.style.fontSize="85%";
  body.style.fontFamily = "FreeMono, monospace	";
  body.style.backgroundImage ="url(fundo3.jpg)";
 // body.appendChild(div);  
}