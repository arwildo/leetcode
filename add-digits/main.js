/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let nums = num.toString().slice();

    while (nums.length > 1) {
        let sum = 0;
        
        for (let i=0; i < nums.length; i++) {
            sum += parseInt(nums[i]);
        }
        nums = sum.toString().slice();
    }

    return parseInt(nums);
};
