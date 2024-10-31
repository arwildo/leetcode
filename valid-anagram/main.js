/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let new_s = s.split('').sort().join('');
    let new_t = t.split('').sort().join('');

    return new_s == new_t;
};
