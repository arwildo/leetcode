/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 /*
  strs = ["eat","tea","tan","ate","nat","bat"]
*/

var groupAnagrams = function(strs) {
    let map = {};

    for (let i in strs) {
        let sorted = strs[i].split('').sort().join('');
        if (!map[sorted]) {
            map[sorted] = [strs[i]];
        } else {
            map[sorted].push(strs[i]);
        }
    }
    return Object.values(map);
};
