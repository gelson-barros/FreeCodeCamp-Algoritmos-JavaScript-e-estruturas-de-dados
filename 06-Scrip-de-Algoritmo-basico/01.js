/*
Converter Celsius em Fahrenheit
O algoritmo para converter de Celsius para Fahrenheit é a temperatura em Celsius vezes 9/5, mais 32.

Você recebe uma variável que celsiusrepresenta a temperatura em Celsius. Use a variável fahrenheitjá definida e atribua a ela a temperatura Fahrenheit equivalente à temperatura Celsius fornecida. Use o algoritmo mencionado acima para ajudar a converter a temperatura Celsius em Fahrenheit.
*/

function convertToF(celsius) {
    let fahrenheit = (celsius * 9) / 5 + 32;
    return fahrenheit;
}

convertToF(30);

/*
convertToF(0) deve retornar um número

convertToF(-30) deve retornar um valor de -22

convertToF(-10) deve retornar um valor de 14

convertToF(0) deve retornar um valor de 32

convertToF(20) deve retornar um valor de 68

convertToF(30) deve retornar um valor de 86
*/