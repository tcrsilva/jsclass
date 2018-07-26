      ---------- AULA 15 ----------
      
## jQuery: declarativo, moderno e vantajoso pois é mais fácil ##

Site jQuery // Download the compressed, production jQuery 3.3.1
           https://jquery.com/download/

criar dois scripts: js e jquery, para a aula;

##    "$" muda o window.onload e document.querySelector;

duplo clique: dbl click

/** jQuery 
	function ola(){
		alert("Olá");
	}

	function criarEvento(){
		$("button").click(function(){
			ola();
		});
	}

	$(criarEvento);
**/

/** JavaScript
	function ola(){
		alert("Olá");
	}

	function criarEvento(){
		document.querySelector("button").addEventListener("click",function(evt){ 
		//evt parâmetro p quando for usar
		ola();
		});
	}

	window.onload = criarEvento;
**/

--------------------------------------------------------------------------------
JavaScript (html com vários os botões, selecionar todos)

	var btnsSlice = Array.prototype.slice.call(btns); //array de botões
	btnsSlice.forEach(function(btn){ //"para cada botão cria o evento abaixo"
		btn.addEventListener("click",function(evt){
			ola();
--------------------------------------------------------------------------------

Para o jQuery para selecionar todos os botões, mesmo código pois o "$" já pega todas as tags button's; 

Padrão: $("seletor css").evento(callback); //callback: função anônima
	$("seletor css").ação();

//AO CLICAR NO BOTÃO OK, A DIV COM A CLASSE FICARÁ COM O FUNDO AMARELO
// E O CONTEUDO DA DIV COM O ID MUDARÁ PARA "MUDOU".
function criarEvento(){
	$("button").click(function(){
		$(".classe1").css("backgroundColor","yellow");
		$("#div1").html("MUDOU..."); //.html = innerHTML
	});
}
$(criarEvento);

##    /////////// EXERCÍCIOS \\\\\\\\\\\\\\       ##

1)Faça uma rotina que ao clicar em qualquer p, esta deverá sumir.
2)Ao clicar em qualquer botão ou div, seu conteúdo html deve ser mudado.
3)Ao sair de uma caixa de texto, essa ficará com a cor de fundo amarela.
4)Ao clicar duas vezes (duplo clique) em um botão, este deve sumir. 

Lembrete: nso formularios usamos .val(expr), caso contrário .html(expr).