/*
Lookahead positivo e negativo
Lookaheads são padrões que dizem ao JavaScript para olhar adiante em sua string para verificar se há padrões mais adiante. Isso pode ser útil quando você deseja pesquisar vários padrões na mesma string.

Existem dois tipos de antevisão: antevisão positiva e antevisão negativa .

Um lookahead positivo verificará se o elemento no padrão de pesquisa está lá, mas não corresponderá realmente a ele. Um lookahead positivo é usado (?=...)quando o ...é a parte necessária que não é correspondida.

Por outro lado, um lookahead negativo verificará se o elemento no padrão de pesquisa não está lá. Um lookahead negativo é usado como (?!...)onde ...é o padrão que você não deseja que esteja lá. O resto do padrão é retornado se a parte de antevisão negativa não estiver presente.

Lookaheads é um pouco confuso, mas alguns exemplos podem ajudar.

let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex);
Ambas as matchchamadas retornariam ["q"].

Um uso mais prático de lookaheads é verificar dois ou mais padrões em uma string. Aqui está um verificador de senha simples (ingenuamente) que procura entre 3 e 6 caracteres e pelo menos um número:

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);
Use lookaheads no pwRegexpara fazer a correspondência de senhas com mais de 5 caracteres e dois dígitos consecutivos.
*/

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);

/*
Seu regex deve usar dois positivos lookaheads.

Seu regex não deve corresponder à string astronaut

Seu regex não deve corresponder à string banan1

Seu regex deve corresponder à string bana12

Seu regex deve corresponder à string abc123

Seu regex não deve corresponder à string 12345

Seu regex deve corresponder à string 8pass99

Seu regex não deve corresponder à string 1a2bcde

Seu regex deve corresponder à string astr1on11aut
*/