/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // clean the data
    let new_s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    
    let l = 0;
    let r = new_s.length - 1;

    while (l < new_s.length) {
        if (new_s[l] !== new_s[r]) {
            return false;
        }
        l += 1;
        r -= 1;
    }
    return true;
};

