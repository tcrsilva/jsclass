AULA 11/05 - SITE DE API: www.programmableweb.com

Funçõess (continuação)

->Aulas Passadas:

1. Funçõess são tratadas como valores;
2. Uma função pode ser passada/retornada;
3. Pode-se alocar funções à variáveis;
4. aplicação: AJAX.

**** Fold/Traversal de listas usando funções de alta odem ****

1. FOR EACH: Aplica-se uma função f, <b>SEM RETORNO</b>, a uma lista. Todos os elementos desta serão parâmetros de F. (sem índice, ele faz tudo)

f [e1, e2, e3, ... , en] => [f(e1),f(e2),f(e3),...,f(en)]

OBS: o vetor acima representa uma ação de f nos elementos.

var divSlice = Array.prototype.slice.call(divs);
 divslice: contém a parte interessante (a parte array, objeto quero tirar fora)

divSlice.forEach(function(div){
	div.style.backgroundColor = "pink";});

## //aparenta -IMITA- o for com in. estrutura de looping da linguagem da função hiperativa (máquina);
## //for each imita o for porém o primo do for each não imita.

function teste(){
	var divs = document.querySelectorAll("div"); //usa-se para 'pegar' as divs do html
	var divSlice = Array.prototype.slice.call(divs); // cria o array, retira o objeto, slice usado apenas para páginas HTML. Quando há DOM.
	divSlice.forEach (funtion(div){ //passando um function para dentro do forEach, dento dela vale tudo o que aprendemos.
		div.style.backgroundColor = "pink";
	});
} 

2. MAP: Aplica-se uma função f, <b>COM RETORNO</b>, a uma lista. Todos os elementos desta serão parâmetros de F. O map produzirá uma nova lista com os elementos tratados.

funtion teste(){
 //Nesse caso, não é necessário o slice
 var listaInt = [1, 2, 3, 4, 5, 6, 7, 8];
 var ul = document.createElement("ul"); 
   listaInt //estrutura completamente funcional
        .map(function(x){                                //distribui, aplicando a função f(e1)... e retornando o valor
              return x*x;
     })
    .forEach(function(x){                              //cria a lista com os resultados dados pelo .map
            var li = document.createElement("li");
            li.innerHTML = x;
            ul.appendChild(li);
     });
    document.body.appendChild(ul);
}

//usa-se mais por fins estéticos e engenharia de software pois evita variáveis etc. Quanto menos usar var, melhor. (funcional);

3. FILTER: Aplica-se uma função f, <b>COM RETORNO BOOLEANO</b>, a uma lista. Todos os elementos desta serão parâmetro de F. O filter eliminará, da lista, todos os retornos false.

[e1, e2, ..., en] => [f(e1), f(e2), ..., f(en)] => [true, false, ..., false] => [e1, e3, ..., en-1]

function teste(){
	var todosDiv = document.querySelectorAll("div");
	var divSlice = Array.prototype.slice.call(todosDiv);
	divSlice
		.filter(function(div){
			return div.className != "classe1"; //class no html
		})
		.forEach(function(div){
			div.style.backgroundColor = "yellow";
		});
}

4. REDUCE (fold): Aplica-se uma função f, <b>RETORNANDO</b> uma operação binária, a uma lista. A lista será reduzida a um valor.

OBS 1: f tem dois parâmetros;
OBS 2: O reduce precisa de um valor inicial.

f vi [e1, e2, e3] ~> f f(e1, vi) [e1, e3] ~> f f(e,f(e1,vi)) [e3] => f(e3,f(e2,f(e1,vi)))

            EXEMPLO: reduce (+) o [1, 2, 3]
	(+)(3,(+)(2,(+)(0,1))) ~> 0+1+2+3=6

## ANTES, sem reduce:

function teste(){
	var listaInt = [2,4,5,2,5];
	var soma = 0;
	for(var i=0; i < listaInt.length; i++;){
		soma = soma + listaInt[i];
	}
	alert(listaReduzida);
}

## AGORA, com reduce:
function teste(){
	var listaReduzida = listaInt.reduce(function(x,y){
		return x+y;
	},0)
	alert(listaReduzida);
}

BUTTON: Trocar onlick no html por:

function criarEvento(){
	document.querySelector("button").addEventListener("click",function(){
		teste();
	});
}

window.onload = criarEvento; //carrega o botão na página.