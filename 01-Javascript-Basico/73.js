/*
Código de GolfePassado
No jogo de golfe , cada buraco tem um par, ou seja, o número médio que strokesum jogador de golfe deve fazer para enfiar a bola no buraco para completar a jogada. Dependendo de quão acima ou abaixo do parseu strokes, existe um apelido diferente.

Sua função pare strokesargumentos serão passados . Retorne a string correta de acordo com esta tabela que lista os golpes em ordem de prioridade; de cima (mais alto) para baixo (mais baixo):

Strokes	Retornar
1	"Hole-in-one!"
<= par - 2	"Águia"
por - 1	"Passarinho"
Através dos	"Par"
por + 1	"Bogey"
por + 2	"Double Bogey"
> = por + 3	"Ir para casa!"
pare strokessempre será numérico e positivo. Adicionamos uma série de todos os nomes para sua conveniência.
*/

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);

/*
golfScore(4, 1) deve retornar a string Hole-in-one!

golfScore(4, 2) deve retornar a string Eagle

golfScore(5, 2) deve retornar a string Eagle

golfScore(4, 3) deve retornar a string Birdie

golfScore(4, 4) deve retornar a string Par

golfScore(1, 1) deve retornar a string Hole-in-one!

golfScore(5, 5) deve retornar a string Par

golfScore(4, 5) deve retornar a string Bogey

golfScore(4, 6) deve retornar a string Double Bogey

golfScore(4, 7) deve retornar a string Go Home!

golfScore(5, 9) deve retornar a string Go Home!
*/