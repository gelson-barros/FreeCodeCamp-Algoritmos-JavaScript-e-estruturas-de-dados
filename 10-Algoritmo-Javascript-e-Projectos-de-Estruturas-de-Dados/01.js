/*
Palíndromo Checker
Retorne true se a string fornecida for um palíndromo. Caso contrário, volte false.

Um palíndromo é uma palavra ou frase escrita da mesma forma para frente e para trás, ignorando pontuação, maiúsculas e minúsculas e espaçamento.

Nota: Você precisará remover todos os caracteres não alfanuméricos (pontuação, espaços e símbolos) e colocar tudo na mesma caixa (minúscula ou maiúscula) para verificar se há palíndromos.

Vamos passar cadeias com formatos diferentes, tais como racecar, RaceCare race CAR entre outros.

Também vamos passar cadeias com símbolos especiais, tais como 2A3*3a2, 2A3 3a2, e 2_A3*3#A2.

*/
function palindrome(str) {
    const regex = /[^0-9a-zA-Z]/ig;
    const strReverse = str.replace(regex, "").split('').reverse().join('').toLowerCase();
    str = str.replace(regex, "").toLowerCase();
    console.log(strReverse === str);

    let ehPalindrome = true;
    str = str.toLowerCase().replace(/[\W_]/g, '');
    for (let i = 0, len = str.length - 1; i < len/2; i++) {
        if (str[i] !== str[len-i]) {
          ehPalindrome = false;
          break;  
        }
        
    }
    console.log(ehPalindrome);
}

palindrome("eye");


palindrome("eye")  // deve retornar um booleano.

palindrome("eye") // deve retornar true.

palindrome("_eye") // deve retornar true.

palindrome("race car") // deve retornar true.

palindrome("not a palindrome") // deve retornar false.

palindrome("A man, a plan, a canal. Panama") // deve retornar true.

palindrome("never odd or even") // deve retornar true.

palindrome("nope") // deve retornar false.

// palindrome("almostomla") // deve retornar false.

// palindrome("My age is 0, 0 si ega ym.") // deve retornar true.

// palindrome("1 eye for of 1 eye.") // deve retornar false.

// palindrome("0_0 (: /-\ :) 0-0") // deve retornar true.

// palindrome("five|\_/|four") // deve retornar false.
