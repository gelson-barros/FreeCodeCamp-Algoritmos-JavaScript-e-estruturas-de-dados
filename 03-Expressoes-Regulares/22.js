/*
Restringir nomes de usuário possíveis
Os nomes de usuário são usados ​​em qualquer lugar na Internet. São eles que dão aos usuários uma identidade única em seus sites favoritos.

Você precisa verificar todos os nomes de usuário em um banco de dados. Aqui estão algumas regras simples que os usuários devem seguir ao criar seu nome de usuário.

1-Os nomes de usuário podem usar apenas caracteres alfanuméricos.

2-Os únicos números no nome de usuário devem estar no final. Pode haver zero ou mais deles no final. O nome de usuário não pode começar com o número.

3-As letras do nome de usuário podem ser minúsculas e maiúsculas.

4-Os nomes de usuário devem ter pelo menos dois caracteres. Um nome de usuário de dois caracteres só pode usar letras do alfabeto como caracteres.

Altere o regex userCheckpara se ajustar às restrições listadas acima.
*/

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);

//let username = "JackOfAllTrades";
//const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
//let result = userCheck.test(username);

/*
Seu regex deve corresponder à string JACK

Seu regex não deve corresponder à string J

Seu regex deve corresponder à string Jo

Seu regex deve corresponder à string Oceans11

Seu regex deve corresponder à string RegexGuru

Seu regex não deve corresponder à string 007

Seu regex não deve corresponder à string 9

Seu regex não deve corresponder à string A1

Seu regex não deve corresponder à string BadUs3rnam3

Seu regex deve corresponder à string Z97

Seu regex não deve corresponder à string c57bT3

Seu regex deve corresponder à string AB1

Seu regex não deve corresponder à string J%4
*/