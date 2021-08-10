/*
Validador de número de telefone
Retorne true se a string passada parecer um número de telefone válido dos EUA.

O usuário pode preencher o campo do formulário da forma que desejar, desde que tenha o formato de um número válido nos Estados Unidos. A seguir estão exemplos de formatos válidos para números dos EUA (consulte os testes abaixo para outras variantes):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

Para este desafio, você receberá uma string como 800-692-7753 ou 8oo-six427676;laskdjf. Seu trabalho é validar ou rejeitar o número de telefone dos EUA com base em qualquer combinação dos formatos fornecidos acima. O código de área é obrigatório. Se o código do país for fornecido, você deve confirmar que o código do país é 1. Retorne true se a string for um número de telefone válido nos EUA; caso contrário, retorne false.
*/
// function telephoneCheck(str) {
//     str = str.replace(/[^0-9]/g,'');
//     console.log(str.length === 11 || str.length === 10);
//     // return true;
// }

function telephoneCheck(str) {
    let rex1 = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/,
        rex2 = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;

    if (rex1.test(str)) {
        return true;
    } else {
        return rex2.test(str) ? true : false;
    }
}

telephoneCheck("555-555-5555");

telephoneCheck("555-555-5555") // deve retornar um booleano.

telephoneCheck("1 555-555-5555")// deve retornar true.

telephoneCheck("1 (555) 555-5555")// deve retornar true.

telephoneCheck("555 555 5555")// deve retornar true.

telephoneCheck("555-555-5555")// deve retornar true.

telephoneCheck("(555)555-5555")// deve retornar true.

telephoneCheck("1(555)555-5555")// deve retornar true.

telephoneCheck("555-5555")// deve retornar false.

telephoneCheck("5555555")// deve retornar false.

telephoneCheck("1 555)555-5555")// deve retornar false.

// telephoneCheck("1 555 555 5555")// deve retornar true.

// telephoneCheck("1 456 789 4444")// deve retornar true.

// telephoneCheck("123**&!!asdf#")// deve retornar false.

// telephoneCheck("55555555")// deve retornar false.

// telephoneCheck("(6054756961)")// deve retornar false.

// telephoneCheck("2 (757) 622-7382")// deve retornar false.

// telephoneCheck("0 (757) 622-7382")// deve retornar false.

// telephoneCheck("-1 (757) 622-7382")// deve retornar false.

// telephoneCheck("2 757 622-7382")// deve retornar false.

// telephoneCheck("10 (757) 622-7382")// deve retornar false.

// telephoneCheck("27576227382")// deve retornar false.

// telephoneCheck("(275)76227382")// deve retornar false.

// telephoneCheck("2(757)6227382")// deve retornar false.

// telephoneCheck("2(757)622-7382")// deve retornar false.

// telephoneCheck("555)-555-5555")// deve retornar false.

// telephoneCheck("(555-555-5555")// deve retornar false.

// telephoneCheck("(555)5(55?)-5555")// deve retornar false.

// telephoneCheck("55 55-55-555-5")// deve retornar false.
