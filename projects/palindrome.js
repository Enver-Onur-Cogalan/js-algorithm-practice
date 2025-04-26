/*
* Palindrome, sondan ve bastan okundugunda ayni olan metinlere denir.
* Verilen string parametresinin palindrome bir kelime olup olmadigini tespit eden bir fonksiyon yazin.
* Fonksiyonunuz boolean bir deger return etmelidir.
*
* Example
* Input: Level -> Output: true
* Input: Deified -> Output: true
*
* Input: John -> Output: false
*/

function palindromeChecker(str) {
    // TODO: Implement Me
    // Removing case sensitivity by converting to lowercase
    let lowerStr = str.toLowerCase()

    // string split, reversed and merged
    let reversedStr = lowerStr.split('').reverse().join('');

    // If the lowercase version of the original string is the same as its reversed form, it is a palindrome.
    return lowerStr === reversedStr;
}

// Kodunuzu farkli girdilerle test edebilirsiniz.
// Dosyayi calistirmak icin, Terminal >> node palindrome.js
console.log(palindromeChecker("Racecar"));
console.log(palindromeChecker("Level"));
console.log(palindromeChecker("John Doe"));
console.log(palindromeChecker("Patika"));
console.log(palindromeChecker("Civic"));