/*
Remover elementos de uma matriz usando fatia em vez de emenda
Um padrão comum ao trabalhar com matrizes é quando você deseja remover itens e manter o resto da matriz. JavaScript oferece o splicemétodo para isso, que leva argumentos para o índice de onde começar a remover itens e, em seguida, o número de itens a serem removidos. Se o segundo argumento não for fornecido, o padrão é remover os itens até o final. No entanto, o splicemétodo altera o array original em que é chamado. Aqui está um exemplo:
*/
var cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1);
/*
Aqui, spliceretorna a string Londone a exclui do array cities. citiesterá o valor ["Chicago", "Delhi", "Islamabad", "Berlin"].

Como vimos no último desafio, o slicemétodo não altera o array original, mas retorna um novo que pode ser salvo em uma variável. Lembre-se de que o slicemétodo usa dois argumentos para os índices começarem e terminarem a fatia (o final não é inclusivo) e retorna esses itens em uma nova matriz. Usar o slicemétodo em vez de spliceajuda a evitar quaisquer efeitos colaterais de mutação de array.

Reescreva a função nonMutatingSpliceusando em slicevez de splice. Ele deve limitar a citiesmatriz fornecida a um comprimento de 3 e retornar uma nova matriz com apenas os três primeiros itens.

Não modifique a matriz original fornecida para a função.
*/

function nonMutatingSplice(cities) {
    // Only change code below this line
    return cities.slice(0, 3);

    // Only change code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);

/*
Seu código deve usar o slicemétodo.

Seu código não deve usar o splicemétodo.

A inputCitiesmatriz não deve mudar.

nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"])deve retornar ["Chicago", "Delhi", "Islamabad"].
*/