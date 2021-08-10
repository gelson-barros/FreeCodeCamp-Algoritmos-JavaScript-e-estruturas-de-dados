/*
Modificar um objeto aninhado dentro de um objeto
Agora vamos dar uma olhada em um objeto um pouco mais complexo. As propriedades do objeto podem ser aninhadas em uma profundidade arbitrária e seus valores podem ser qualquer tipo de dados com suporte em JavaScript, incluindo matrizes e até mesmo outros objetos. Considere o seguinte:

let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8
    }
  }
};
nestedObjecttem três propriedades: id(valor é um número), date(valor é uma string) e data(valor é um objeto com sua estrutura aninhada). Embora as estruturas possam se tornar complexas rapidamente, ainda podemos usar as mesmas notações para acessar as informações de que precisamos. Para atribuir o valor 10à busypropriedade do onlineStatusobjeto aninhado , usamos a notação de ponto para fazer referência à propriedade:

nestedObject.data.onlineStatus.busy = 10;
Aqui definimos um objeto userActivity, que inclui outro objeto aninhado nele. Defina o valor da onlinechave como 45.

*/

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Only change code below this line
userActivity.data.online = 45;
// Only change code above this line

console.log(userActivity);

/*
userActivitydeve ter id, datee datapropriedades.

userActivitydeve ter uma datachave definida para um objeto com chaves totalUserse online.

A onlinepropriedade aninhada na datachave de userActivitydeve ser definida como45

A onlinepropriedade deve ser definida usando a notação de ponto ou colchete.
*/