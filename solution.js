// complete the given function

function palindrome(str){
    let s1 = str.toLowerCase();
    let s2 = s1.split('').reverse().join('');
    if(s1===s2){
        return true;
    }
    return false;
}
module.exports = palindrome
