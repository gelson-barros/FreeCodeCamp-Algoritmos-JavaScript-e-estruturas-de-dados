/*
Estojo Spinal Tap
Converta uma string em caixa espinhal. As letras maiúsculas e minúsculas são todas palavras-minúsculas unidas por travessões.
*/

function spinalCase(str) {
    str =str.split(/\s|_|(?=[A-Z])/).map(str => str.toLowerCase()).join('-');
    console.log(str);
}

spinalCase("This Is Spinal Tap");


spinalCase("This Is Spinal Tap") // deve retornar a string this-is-spinal-tap.

spinalCase("thisIsSpinalTap") // deve retornar a string this-is-spinal-tap.

spinalCase("The_Andy_Griffith_Show") // deve retornar a string the-andy-griffith-show.

spinalCase("Teletubbies say Eh-oh") // deve retornar a string teletubbies-say-eh-oh.

spinalCase("AllThe-small Things") // deve retornar a string all-the-small-things.