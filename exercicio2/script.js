// # Exercício 2

// Crie um programa que peça um número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

// Aqui abaixo a resolução exata do que o enunciado pede, exceto que não utilizei o prompt. 
let tabuada = 7

for(let i = 0; i <= 10; i++){
    console.log(`${tabuada} x ${i} = ${tabuada * i}`);
}

// #######################################################
console.log(" ");
// Já aqui abaixo, transformei a resolução acima em uma função. Montei uma função genérica, pra poder chamar essa função quantas vezes eu quiser utilizando números diferentes. 

function imprimirTabuada (parametroFunc) {
    
for(let i = 0; i <= 10; i++){
    console.log(`${parametroFunc} x ${i} = ${parametroFunc * i}`);
}

}

imprimirTabuada(3)
imprimirTabuada(4)


// #######################################################
console.log(" ");

// Ainda no apagar das luzes, resolvi transformar o exercício original feito na estrutura for para a estrutura While, e ainda adicionei uma função que neste caso resolvi deixar o parâmetro da função com o nome da variável tabuama mesmo, que está lá no início deste script, ou seja, no escopo global, e mesmo assim ela ainda calculou mais uma chamada da função com um outro argumento, pois o nome do parâmetro mesmo sendo exatamente o mesmo da variável lá em cima, eles não têm uma relação direta. De qualquer forma, quando ali na primeira chamada da função eu chamo a palavra tabuada, o Javascript de fato entende que o argumento que estou passando ali para a função é de fato o valor da variável lá em cima, e o cálculo da tabuada se faz normalmente. 

function imprimirTab2(tabuada) {
    
let i = 0

while(i <= 10){
    console.log(`${tabuada} x ${i} = ${tabuada * i}`);

    i++
}
}
imprimirTab2(tabuada)
imprimirTab2(6)




