/**
 * @param {number[]} nums
 * @return {number}

 nums = [100,4,200,1,3,2]

 sort it
 nums = [1,2,3,4,100,200]

count = 0
 loop it
    if nums[i] + 1 == nums[i+1]:
        count += 1
    else:
        return count

 */
var longestConsecutive = function(nums) {
    nums.sort((a, b) => a - b);
    
    // if empty return 0
    if (nums.length === 0) {
        return 0;
    }

    let count = 1;
    let maxCount = 1;


    for (let i=0; i < nums.length; i++) {
        // skip dups
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }

        if (nums[i] == nums[i - 1] + 1) {
            count += 1;
        } else {
            maxCount = Math.max(maxCount, count);
            count = 1;
        }
    }
    return Math.max(maxCount, count); 
    
};
