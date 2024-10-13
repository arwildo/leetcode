/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}

    nums = [1,1,1,2,2,3], k = 2

    sum = {1: 3,2: 2, 3:1 }
    return 

 */
var topKFrequent = function(nums, k) {
    let map = new Map();

    for (i in nums) {
        if (map.has(nums[i])){
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    return [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(entry => entry[0]); 
};

