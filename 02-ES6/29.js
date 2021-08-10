/*
Cumpra uma promessa com determinação e rejeição

A promessa tem três estados: pending, fulfilled, e rejected. A promessa que você criou no último desafio está para sempre presa no pendingestado porque você não adicionou uma maneira de cumprir a promessa. Os parâmetros resolvee rejectdados ao argumento da promessa são usados ​​para fazer isso. resolveé usado quando você deseja que sua promessa seja bem-sucedida e rejectquando você deseja que ela falhe. Esses são métodos que aceitam um argumento, conforme visto a seguir.

const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
O exemplo acima usa strings para o argumento dessas funções, mas pode realmente ser qualquer coisa. Freqüentemente, pode ser um objeto do qual você usaria dados para colocar em seu site ou em outro lugar.

Faça a promessa lidar com o sucesso e o fracasso. Se responseFromServerfor true, chame o resolvemétodo para completar a promessa com sucesso. Passe resolveuma string com o valor We got the data. Se responseFromServeré false, usar o rejectmétodo em vez e passá-lo a string: Data not received.
*/

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer = true;

    if (responseFromServer) {
        // Change this line
        resolve("We got the data");
    } else {
        // Change this line
        reject("Data not received");
    }
});

/*
resolve deve ser chamado com a string esperada quando a if condição for true.

reject deve ser chamado com a string esperada quando a if condição for false.
*/