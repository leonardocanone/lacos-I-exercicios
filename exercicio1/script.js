// # Exercício 1

// Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.

// Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. Quando a resposta não for **sim**, devemos imprimir o valor total da conta.


// let coxinha = prompt("Deseja comer uma coxinha por apenas R$ 2,50 ?")

// let preco = 2.50
// let conta = 0

// while(coxinha.toLocaleUpperCase() === "S"){

//     conta += preco
//     console.log("Coxinhas R$",preco,"cada");

//     coxinha = prompt("Deseja mais uma coxinha?")
// }

// console.log("Total a pagar R$",conta);

// Aqui termina a resolução do Exercício 1 da forma exata que pede o enunciado. Já logo abaixo, obtive o mesmo funcionamento do código porém utilizando uma função genérica, a qual me permitiu ter mais de um resultado através de duas chamadas com dois argumentos diferentes, e eu ainda eliminei a variável preço, a qual neste modelo passa a ser lançada como argumento da função.
// #############################################################################

// function fecharConta (parametroFunc) {

// let coxinha = prompt("Deseja comer uma coxinha por apenas R$ 2,50 ?")

// let conta = 0

// while(coxinha.toLocaleUpperCase() === "S"){

//     conta += parametroFunc
//     console.log("Coxinhas R$",parametroFunc,"cada");

//     coxinha = prompt("Deseja mais uma coxinha?")
// }

// console.log("Total a pagar R$",conta);

// }

// fecharConta(2.50)
// fecharConta(2.99)

// #############################################################################
// Outra maneira que encontrei pra simular o Exercício 1

// const arrayCoxinhas = ["S","S","S","S","N"]

// let preco2 = 3
// let conta2 = 0
// let i = 0

// while(arrayCoxinhas[i] === "S"){

//     conta2 = conta2 + preco2
//     console.log(`Item ${i+1} - Coxinha = ${preco2}`);

//     i++
// }

// console.log(arrayCoxinhas[arrayCoxinhas.length-1],"= cliente pediu a conta");
// console.log("Total a pagar = R$",conta2);

// Agora abaixo, fazendo o exemplo alternativo que fiz p/ o Exercício 1 porém utilizando uma função. Montei uma função genérica, pra poder chamar essa função quantas vezes eu quiser utilizando preços diferentes.

const arrayCoxinhas = ["S","S","S","S","N"]

function verificarConta(parametroFunc) {
    
    let conta3 = 0
    let i3 = 0

while(arrayCoxinhas[i3] === "S"){

    conta3 = conta3 + parametroFunc
    console.log(`Item ${i3+1} - Coxinha = ${parametroFunc}`);

    i3++
}

console.log(arrayCoxinhas[arrayCoxinhas.length-1],"= cliente pediu a conta");
console.log("Total a pagar = R$",conta3);

}

verificarConta(3)
verificarConta(5)
verificarConta(6)




