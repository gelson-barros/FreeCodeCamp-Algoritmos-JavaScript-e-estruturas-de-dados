/*
Lidar com uma promessa cumprida com entãoPassado
As promessas são mais úteis quando você tem um processo que leva uma quantidade desconhecida de tempo em seu código (ou seja, algo assíncrono), geralmente uma solicitação do servidor. Quando você faz uma solicitação ao servidor, leva algum tempo e, depois que ela é concluída, você geralmente deseja fazer algo com a resposta do servidor. Isso pode ser alcançado usando o thenmétodo. O thenmétodo é executado imediatamente após o cumprimento de sua promessa resolve. Aqui está um exemplo:

myPromise.then(result => {
  
});
resultvem do argumento dado ao resolvemétodo.

Adicione o thenmétodo à sua promessa. Use resultcomo o parâmetro de sua função de retorno de chamada e registre resultno console.
*/

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

makeServerRequest.then((result) => {
    console.log(result);
});

/*
Você deve chamar o thenmétodo na promessa.

Seu thenmétodo deve ter uma função de retorno de chamada com resultcomo parâmetro.

Você deve fazer logon resultno console.
*/