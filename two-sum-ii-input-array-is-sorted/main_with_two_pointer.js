/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let ret = [];
    let l = 0;
    let r = numbers.length - 1;

    while (l < r) {
        let calculation = numbers[l] + numbers[r];
        if (calculation === target) {
            ret.push(l+1, r+1);
            return ret;
        } else if (calculation < target) {
            l++;
        } else {
            r--;
        }
    }

    return ret;
};
