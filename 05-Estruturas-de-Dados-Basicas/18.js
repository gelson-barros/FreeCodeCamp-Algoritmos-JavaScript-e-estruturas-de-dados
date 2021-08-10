/*
Iterar pelas chaves de um objeto com uma instrução for ... in
Às vezes, você pode precisar iterar por todas as chaves de um objeto. Isso requer uma sintaxe específica em JavaScript chamada de instrução for ... in . Para nosso usersobjeto, isso poderia ser assim:

for (let user in users) {
  console.log(user);
}
Isto log Alan, Jeff, Sarah, e Ryan- cada valor em sua própria linha.

Nessa instrução, definimos uma variável usere, como você pode ver, essa variável foi redefinida durante cada iteração para cada uma das chaves do objeto, conforme a instrução percorria o objeto, resultando na impressão do nome de cada usuário no console.

NOTA: Os objetos não mantêm uma ordem para as chaves armazenadas como os arrays fazem; assim, a posição de uma chave em um objeto, ou a ordem relativa em que ela aparece, é irrelevante ao fazer referência ou acessar essa chave.

Definimos uma função countOnlineque aceita um argumento (um objeto de usuários). Use uma instrução for ... in nesta função para percorrer o objeto de usuários passado para a função e retornar o número de usuários cuja onlinepropriedade está definida como true. Um exemplo de um objeto de usuários que pode ser passado countOnlineé mostrado abaixo. Cada usuário terá uma onlinepropriedade com um valor trueou false.

{
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}
*/
const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
    // Only change code below this line
    let i = 0;
    for (let user in usersObj) {
        if (usersObj[user].online === true) {
            i++;
        }
    }
    return i;
    // Only change code above this line
}

countOnline(users);

/*
A função countOnlinedeve usar uma for ininstrução para iterar por meio das chaves de objeto do objeto passado a ela.

A função countOnlinedeve retornar 1quando o objeto { Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } }é passado para ela

A função countOnlinedeve retornar 2quando o objeto { Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } }é passado para ela

A função countOnlinedeve retornar 0quando o objeto { Alan: { online: false }, Jeff: { online: false }, Sarah: { online: false } }é passado para ela
*/