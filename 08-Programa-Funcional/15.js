/*
Use o método de redução para analisar dados
Array.prototype.reduce(), ou simplesmente reduce(), é a mais geral de todas as operações de array em JavaScript. Você pode resolver quase todos os problemas de processamento de array usando o reducemétodo.

O reducemétodo permite formas mais gerais de processamento de array e é possível mostrar que ambos filtere mappodem ser derivados como aplicações especiais de reduce. O reducemétodo itera sobre cada item em uma matriz e retorna um único valor (ou seja, string, número, objeto, matriz). Isso é obtido por meio de uma função de retorno de chamada que é chamada em cada iteração.

A função de retorno de chamada aceita quatro argumentos. O primeiro argumento é conhecido como o acumulador, ao qual é atribuído o valor de retorno da função de retorno de chamada da iteração anterior, o segundo é o elemento atual sendo processado, o terceiro é o índice desse elemento e o quarto é a matriz sobre a qual reduceé chamado.

Além da função de retorno de chamada, reducepossui um parâmetro adicional que leva um valor inicial para o acumulador. Se este segundo parâmetro não for usado, a primeira iteração é ignorada e a segunda iteração passa o primeiro elemento da matriz como o acumulador.

Veja abaixo um exemplo usando reducena usersmatriz para retornar a soma de todas as idades dos usuários. Para simplificar, o exemplo usa apenas o primeiro e o segundo argumentos.
*/

const users = [
    { name: "John", age: 34 },
    { name: "Amy", age: 20 },
    { name: "camperCat", age: 10 },
];

const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges);

/*
O console exibiria o valor 64.

Em outro exemplo, veja como um objeto pode ser retornado contendo os nomes dos usuários como propriedades com suas idades como valores.
*/

const users = [
    { name: "John", age: 34 },
    { name: "Amy", age: 20 },
    { name: "camperCat", age: 10 },
];

const usersObj = users.reduce((obj, user) => {
    obj[user.name] = user.age;
    return obj;
}, {});
console.log(usersObj);

/*
O console exibiria o valor { John: 34, Amy: 20, camperCat: 10 }.

A variável watchListcontém uma série de objetos com informações sobre vários filmes. Use reducepara encontrar a classificação IMDB média dos filmes dirigidos por Christopher Nolan. Lembre-se de desafios anteriores como obter filterdados e mapsobre eles para extrair o que você precisa. Você pode precisar criar outras variáveis ​​e retornar a classificação média da getRatingfunção. Observe que os valores de classificação são salvos como strings no objeto e precisam ser convertidos em números antes de serem usados ​​em quaisquer operações matemáticas.
*/

// The global variable
var watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

function getRating(watchList){
  // Only change code below this line
  var averageRating;
  var filterFilms = watchList
    .filter((filme) => filme.Director === "Christopher Nolan");
  var rating = filterFilms.reduce((acc, actual) => (acc += parseFloat(actual.imdbRating)), 0);
  averageRating = rating / filterFilms.length;

  // Only change code above this line
  return averageRating
}

// function getRating(watchList) {
//     // Add your code below this line
//     var count = 0;
//     var averageRating =
//         watchList.reduce((sum, movie) => {
//             if (movie.Director == "Christopher Nolan") {
//                 count += 1;
//                 return sum + parseFloat(movie.imdbRating);
//             }
//             return sum;
//         }, 0) / count;
//     // Add your code above this line
//     return averageRating;
// }

// function getRating(watchList) {
//     // Add your code below this line
//     const averageRating = watchList.reduce(
//         ({ sum, count }, { Director: dir, imdbRating: rating }, idx, arr) => {
//             if (dir === "Christopher Nolan") {
//                 count++;
//                 sum += Number(rating);
//             }
//             return idx === arr.length - 1 ? sum / count : { sum, count };
//         },
//         { sum: 0, count: 0 }
//     );
//     // Add your code above this line
//     return averageRating;
// }

// function getRating(watchList) {
//     // Add your code below this line
//     var averageRating =
//         watchList
//             // Use filter to find films directed by Christopher Nolan
//             .filter((film) => film.Director === "Christopher Nolan")
//             // Use map to convert their ratings from strings to numbers
//             .map((film) => Number(film.imdbRating))
//             // Use reduce to add together their ratings
//             .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
//         // Divide by the number of Nolan films to get the average rating
//         watchList.filter((film) => film.Director === "Christopher Nolan")
//             .length;
//     // Add your code above this line
//     return averageRating;
// }


console.log(getRating(watchList));
/*
A watchListvariável não deve mudar.

Seu código deve usar o reducemétodo.

O getRating(watchList)deve ser igual a 8,675.

Seu código não deve usar um forloop.

Seu código deve retornar a saída correta após modificar o watchListobjeto.
*/