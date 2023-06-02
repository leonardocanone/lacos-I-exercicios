// # Exercício 3

// Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings em formato de ranking, como no exemplo abaixo:

const maioresCidades = ["Tóquio", "Shangai", "São Paulo", "Nova Yorque", "Cidade do México"]


for(let i = 0; i < maioresCidades.length; i++){

    console.log(`${i+1} - ${maioresCidades[i]}`);
}

// #######################################################
console.log(" ");

// Acima está a resolução exata conforme pede o enunciado, já a resolução abaixo troquei a estrutura "for com Arrays" pela estrutura "While". Deu o mesmo resultado.  

let i2 = 0

while(i2 < maioresCidades.length){

    console.log(`${i2+1} - ${maioresCidades[i2]}`);

    i2++
}

