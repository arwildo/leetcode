/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();

    for (let i=0; i < nums.length; i++) {
        let x = target - nums[i];

        if (map.has(x)) {
            return [map.get(x), i];
        }

        map.set(nums[i], i);
    }
};
