/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let rev = x.toString().split('').reverse().join('');

    return rev == x;
};
