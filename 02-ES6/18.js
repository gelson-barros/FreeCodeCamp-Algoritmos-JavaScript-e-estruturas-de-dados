/*
Escrever declarações literais concisas de objeto usando abreviatura de propriedade de objeto

ES6 adiciona um bom suporte para definir facilmente literais de objeto.

Considere o seguinte código:

const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
getMousePositioné uma função simples que retorna um objeto contendo duas propriedades. ES6 fornece o açúcar sintático para eliminar a redundância de ter que escrever x: x. Você pode simplesmente escrever xuma vez e ele será convertido para x: x(ou algo equivalente) nos bastidores. Aqui está a mesma função acima reescrita para usar esta nova sintaxe:

const getMousePosition = (x, y) => ({ x, y });
Use objeto propriedade estenográfica com literais de objeto para criar e retornar um objeto com name, agee genderpropriedades.
*/

const createPerson = (name, age, gender) => {
    // Only change code below this line
    return {
        name,
        age,
        gender,
    };
    // Only change code above this line
};

/*
createPerson("Zodiac Hasbro", 56, "male")deve retornar {name: "Zodiac Hasbro", age: 56, gender: "male"}.

Seu código não deve ser usado key:value.
*/