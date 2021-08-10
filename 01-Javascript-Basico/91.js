/*
Acessando objetos aninhadosPassado
As subpropriedades dos objetos podem ser acessadas encadeando a notação de ponto ou colchete.

Aqui está um objeto aninhado:

var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;
ourStorage.cabinet["top drawer"].folder2seria a string secretse ourStorage.desk.drawerseria a string stapler.

Acesse o myStorageobjeto e atribua o conteúdo da glove boxpropriedade à gloveBoxContentsvariável. Use a notação de ponto para todas as propriedades quando possível, caso contrário, use a notação de colchetes.
*/

var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = undefined;

/*
gloveBoxContentsdeve ser igual à string maps.

Seu código deve usar notação de ponto e colchete para acessar myStorage.
*/