// EXERCÍCIOS DE AULA
 function ex1() {
 	$("p").click(function(){
		$(this).css("display","none");
	});	
 }
 $(ex1);

 function ex2() {
 	$("button").click(function(){
		$(this).html("Conteúdo Mudado!");
	});	
	$("div").click(function(){
		$(this).html("Conteúdo Mudado!");
	});	
 }
 $(ex2); 

 function ex3(){
 	$("input").blur(function(){
		$(this).css("backgroundColor","yellow");
	});	
 }
 $(ex3);

 function ex4(){
 	$("button").dblclick(function(){
		$("#botao1").css("display","none");
	});
 }
$(ex4);

//1) AO CLICAR NO BOTÃO OK, A DIV COM A CLASSE FICARÁ COM O FUNDO AMARELO
// E O CONTEUDO DA DIV COM O ID MUDARÁ PARA "MUDOU".

//function criarEvento(){
//	$("button").click(function(){
//		$(".classe1").css("backgroundColor","yellow");
//		$("#div1").html("MUDOU..."); //.html = innerHTML
//	});
//}
//$(criarEvento);

//2) AO CLICAR EM UMA DIV QUALQUER, SUA COR DE FUNDO FICARÁ EM AZUL.

//function criarEvento(){
//	$("div").click(function(){
//		$(this).css("backgroundColor","blue");
//	});
//}
//$(criarEvento)

/**
function ola(){
	alert("Olá");
}

function criarEvento(){
	var btns = document.querySelectorAll("button");
	var btnsSlice = Array.prototype.slice.call(btns);
	btnsSlice.forEach(function(btn){
		btn.addEventListener("click",function(evt){
			ola();
		});
	});
}

window.onload = criarEvento;
**/

//     SEGUNDA PARTE DA AULA
function criarEvento(){
	$("button").click(function(){
		var n1 = parseInt($("#n1").val());
		var n2 = parseInt($("#n2").val());
		$("#n3").val(n1+n2);
		//$("#res").html(n1+n2);
	});
	$("#n1, #n2").focus(function(){
		$(this).css("backgroundColor","yellow");
	});
	$("#n1, #n2").blur(function(){
		$(this).css("backgroundColor","white");
	});
}

$(criarEvento);