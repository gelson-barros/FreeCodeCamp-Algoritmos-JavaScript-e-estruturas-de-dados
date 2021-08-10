/*
Gere números inteiros aleatórios com JavaScriptPassado
É ótimo podermos gerar números decimais aleatórios, mas é ainda mais útil se o usarmos para gerar números inteiros aleatórios.

Use Math.random()para gerar um decimal aleatório.
Multiplique esse decimal aleatório por 20.
Use outra função Math.floor()para arredondar o número para baixo até o número inteiro mais próximo.
Lembre-se de que Math.random()nunca pode retornar a 1e, porque estamos arredondando para baixo, é impossível realmente obter 20. Essa técnica nos dará um número inteiro entre 0e 19.

Juntando tudo, é assim que nosso código se parece:

Math.floor(Math.random() * 20);
Estamos chamando Math.random(), multiplicando o resultado por 20 e, em seguida, passando o valor para Math.floor()funcionar para arredondar o valor para o número inteiro mais próximo.

Use esta técnica para gerar e retornar um número inteiro aleatório entre 0e 9.
*/
function randomWholeNum() {
    // Only change code below this line

    return Math.random();
}

/*
O resultado de randomWholeNumdeve ser um número inteiro.

Você deve usar Math.randompara gerar um número aleatório.

Você deve ter multiplicado o resultado de Math.randompor 10 para torná-lo um número entre zero e nove.

Você deve usar Math.floorpara remover a parte decimal do número.
*/
