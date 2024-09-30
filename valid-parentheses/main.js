/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []

    for (let i=0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(s[i]);
        } else if (s[i] === "[") {
            stack.push(s[i]);
        } else if (s[i] === "{") {
            stack.push(s[i]);
        } else if (s[i] === "]") {
            if (stack[stack.length -1 ] == "[") {
                stack.pop("[")
            } else {
                return false;
            }
        } else if (s[i] === "}") {
            if (stack[stack.length -1 ] == "{") {
                stack.pop("{")
            } else {
                return false;
            }
        } else if (s[i] === ")") {
            if (stack[stack.length -1 ] == "(") {
                stack.pop("(")
            } else {
                return false;
            }
        }
    }
    if (stack.length == 0) {
        return true;
    }
    return false;
};

