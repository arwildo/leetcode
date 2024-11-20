/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);

    let ret = [];

    for (let i=0; i < nums.length - 2; i++) {
        // avoid dups
        if (nums[i] === nums[i - 1]) {
            continue;
        }

        // two pointer
        l = i + 1;
        r = nums.length - 1;

        while (l < r) {
            let cal = nums[i] + nums[l] + nums[r];

            if (cal === 0) {
                ret.push([nums[i], nums[l], nums[r]]);

                // avoid dups for l and r
                while (l < r && nums[l] === nums[l + 1]) l++;
                while (l < r && nums[r] === nums[r - 1]) r++;
                
                l++;
                r--;
            } else if (cal < 0) {
                l++;
            } else {
                r--;
            }
        }
    }

    return ret;
};
