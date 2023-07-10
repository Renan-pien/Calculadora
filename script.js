function insert(num){ //Dentro dos parenteses ta recebendo o parametro numero
    var numero = document.querySelector('#resultado').innerHTML //chamando o elemento byid para poder inserir dentro do id 'resultado' e usando innerHTLM para colocar o numero la dentro
    document.querySelector('#resultado').innerHTML = numero + num
}  

function clean(){
    document.querySelector('#resultado').innerHTML = "" //lógica de função clean, para limpar onde esta os elementos.
}

function back(){
    var vol = document.querySelector('#resultado').innerHTML
    document.querySelector('#resultado').innerHTML = vol.substring(0, vol.length -1) //lógica para retirar um numero do parágrafo no caso apagar um
}

function calcular(){
    var resultado = document.querySelector('#resultado').innerHTML
    if(resultado){
        document.querySelector('#resultado').innerHTML = eval(resultado) // com o codigo eval ele ja computa ou seja ja executa todos os operadores.
    }else{
        document.querySelector('#resultado').innerHTML = 'Nada Para Cacular!'
    }
}



