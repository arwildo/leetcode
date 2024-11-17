/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function(n) {
    function recursive(current, ob, cb) {
        if (current.length == 2 * n) {
            result.push(current);
            return;
        }

        if (ob < n) {
            recursive(current + '(', ob + 1, cb);
        }
        if (cb < ob) {
            recursive(current + ')', ob, cb + 1);
        }
    }

    result = [];
    recursive("", 0, 0);
    return result;
};
