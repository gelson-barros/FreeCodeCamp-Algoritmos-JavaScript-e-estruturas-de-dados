/*
Lidar com uma promessa rejeitada com capturaPassado
catché o método usado quando sua promessa foi rejeitada. Ele é executado imediatamente após o rejectmétodo de uma promessa ser chamado. Esta é a sintaxe:

myPromise.catch(error => {
  
});
erroré o argumento passado para o rejectmétodo.

Adicione o catchmétodo à sua promessa. Use errorcomo o parâmetro de sua função de retorno de chamada e registre errorno console.
*/

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

makeServerRequest.then((result) => {
    console.log(result);
});

makeServerRequest.catch((error) => {
    console.log(error);
});

/*
Você deve chamar o catchmétodo na promessa.

Seu catchmétodo deve ter uma função de retorno de chamada com errorcomo parâmetro.

Você deve fazer logon errorno console.
*/