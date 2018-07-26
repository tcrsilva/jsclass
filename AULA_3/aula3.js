function teste2(){
    var aluno = {};
    aluno ["nome"] = "Khayan";
    aluno ["idade"] = "28";
    aluno ["disciplina"] = "JavaScript";
    //aluno ["notas"] = {"p1":6, "p2":4, "p3":7};
    aluno["notas"] = [6,4,7];
    /*document.writeln(aluno.nome);
    document.writeln(aluno.idade);
    document.writeln(aluno.notas.p1);
    document.writeln(aluno.notas.p2);
    document.writeln(aluno.notas.p3);*/
    
    for (var chave in aluno){
        document.write(chave + "->" + aluno[chave] + "<br>");
    }
}


function teste3(){
    var alunos=[
        {
            nome:"Khayan",idade:"28"
        },
        {
            nome:"Victor Ferraz", idade:"25"
        },
        {
            nome:"Daniela", idade:"32"
        },
    ]
    for(var i=0;i < alunos.length;i++){
        verObj(alunos[i]);
    }
}

function verObj(obj){
    for (var chave in obj){
        document.write(chave + "->" + obj[chave] + "<br>")
    }
}

function teste(){
    //var obj = {};//OBJ VAZIO
    var obj = {"salario":934}; //OBJ N-VAZIO
    obj["nome"] = "JOAO";//Inclui
    obj["idade"] = "24";
    document.write(obj.nome + "<br>");//Acessa
    document.write(obj.idade + "<br>");
    document.write(obj.salario)
}

function teste4(){
    var funcionarios = [{
        nome:"Joao",salario:900
    },{
        nome:"Maria",salario:1100
    },{
        nome:"Pedro",salario:974
    },{
        nome:"Marx",salario:1000
    }];
    document.write(somarSalario(funcionarios))
}

function somarSalario(listFunc){
    var soma = 0;
    for(var i=0;i<listFunc.length;i++){
        soma = soma + listFunc[i].salario;
    }
    return soma;
}

function exercicio1(){
    var exemplo = [{
        nome:"Livro1",preco:78,tipo:"livro"
    },{
        nome:"Livro2",preco:80,tipo:"livro"
    },{
        nome:"Caneta",preco:5,tipo:"escritorio"
    },{
        nome:"Livro3",preco:50,tipo:"livro"
    },{
        nome:"Livro4",preco:11,tipo:"livro"
    }];
    for(var i=0; i>exemplo.length; i++){
        verObj(exemplo[i]);
    }
    document.write("Soma dos Produtos ->" + somarProduto(exemplo) + "<br>");
    document.write("Soma dos Livros ->" + somarLivro(exemplo) + "<br>");
    document.write("Maior preço de um Livro ->" + maiorPreco(exemplo) + "<br>");
    document.write("Menor preço de um Livro ->" + menorPreco(exemplo) + "<br>");
}

function somarProduto(listCompra){
    var soma = 0;
    for(var i=0;i<listCompra.length;i++){
        soma = soma + listCompra[i].preco;
    }
    return soma;
}

function somarLivro(listLivro){
    var soma = 0;
    for(var i=0;i<listLivro.length;i++){
        if(listLivro[i].tipo=="livro")
            soma = soma + listLivro[i].preco;
    }
    return soma;
}

function maiorPreco(listMaior){
    var maior = listMaior[0];
    for(var i in listMaior){
        if(listMaior[i].preco>maior)
        maior = Math.max(maior.listMaior[i].preco);
    }
    return maior;
}

function menorPreco(listMenor){
    var menor = listMenor[0];
    for(var i in listMenor){
        if(listMenor[i].preco<menor)
        menor = Math.min(menor.listMenor[i].preco);
    }
    return menor;
}