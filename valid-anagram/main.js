/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sort_s = s.split('').sort().join('');
    let sort_t = t.split('').sort().join('');

    if (sort_s === sort_t) {
        return true;
    } else {
        return false;
    }
};
