/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        // important : to get the middle of array
        let mid = Math.floor((l + r) / 2);

        // if the target found
        if (nums[mid] == target) {
            return mid;
        }

        // if the target is less than the current mid value
        if (nums[mid] < target) {
            l = mid + 1; // the current mid is left
        } else {
            r = mid - 1; // the current mid is right
        }
    }

    // target not found in array
    return -1;
};

