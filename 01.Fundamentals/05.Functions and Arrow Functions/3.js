/*function Palindrome([word]) {
 let firstHalf = '';
 let secondHalf = '';
 for (let i = 0; i < (word.length - 1 )/ 2  ; i++) {
 firstHalf += word[i];
 }
 console.log(firstHalf);
 for (let j = ((word.length - 1 ) / 2 - 1) ; j >= 0 ; j--) {
 secondHalf += word[j];
 }
 console.log(secondHalf);



 for (let k = 0; k < (word.length - 1 )/ 2 ; k++) {
 return firstHalf[k] == secondHalf[((word.length - 1 )/ 2) -k];
 }


}
*/

/**
 * 
 * @param word
 * @returns {boolean}
 */

function isPalindrome([word]) {
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] != str[word.length - i - 1])return false;
     return true;

    }
}

console.log(isPalindrome(["haha"]));