/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
   let l = 0;
   let r = nums.length - 1;

   while (l <= r) {
        // bagi dua
        let mid = Math.floor((l + r) / 2);

        // kalau ketemu target
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] < target) {
            l = mid + 1; // mid sekarang + 1 dan jadi left
        } else {
            r = mid - 1; // mid sekarang - 1 dan jadi right
        }
   } 

   return -1;
};
