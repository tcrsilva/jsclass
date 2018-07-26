function teste(){
    var div = document.createElement("div"); //criou a div em memória 
    div.innerHTML = "DIV CRIADA";
    div.style.backgroundColor = "pink";
    div.setAttribute("id","d1");
    document.body.appendChild(div);
    
    var p = document.createElement("p");
    p.innerHTML = "PARAGRAFO";
    div.appendChild(p);//coloca o p dentro da div
}

function montar(v){ // v eh um vetor com nomes
    var ul = document.createElement("ul");
    for (var i=0; i < v.length; i++){
        var li = document.createElement("li");
        li.innerHTML = v[i];
        if (i%2 == 0)
            li.style.backgroundColor = "yellow";
        ul.appendChild(li);
    }
    
    document.body.appendChild(ul);
}
function principal() {
    montar (["MATHEUS", "MATHEUS", "DANIELA", "VF"]);
}

function ex1(){
    var div = document.createElement("div");
    var span = document.createElement("span");
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    p1.innerHTML = "1 PARAGRAFO";
    p2.innerHTML = "2 PARAGRAFO";
    span.innerHTML = "TEXTO QUALQUER";
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(span);

    document.body.appendChild(div);
}

function ex2() {
    montar (["NOME1", "NOME2", "NOME3", "NOME4"]);
}

function montarNumero(n){
     var ul = document.createElement("ul");
     var div = document.createElement("div");
    for (var i=1; i <= n; i++){ 
        var li = document.createElement("li");
        li.innerHTML = i ;
        ul.appendChild(li)
    }
    div.appendChild(ul);
    document.body.appendChild(ul);
}

function ex3(){
    montarNumero(10);
}

function altera(){
    var div = document.querySelector("#d1");
    var h1 = document.createElement("h1");
    h1.innerHTML = "H1 NOVA";
    div.parentNode.replaceChild(h1,div)//pai da div, parent node expecifica
}
