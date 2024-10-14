/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []

    let matching_brackets = {
        "]" : "[",
        "}" : "{",
        ")" : "("
    };

    for (let i=0; i < s.length; i++) {
        if (["(", "{", "["].includes(s[i])) {
            stack.push(s[i]);
        } else if (stack.length > 0 && stack[stack.length - 1] === matching_brackets[s[i]]) {
            stack.pop();
        } else {
            return false;
        }
    }
    
    return stack.length == 0;
};
