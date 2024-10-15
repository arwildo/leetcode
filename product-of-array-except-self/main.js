/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
   let prefix = new Map(); 
   let postfix = new Map(); 
   let ret = [];

   let runningProduct = 1; 
   for (let i=0; i < nums.length; i++) {
    prefix.set(i, runningProduct);
    runningProduct *= nums[i];
   }

   runningProduct = 1; 
   for (let i=nums.length - 1; i >= 0; i--) {
    postfix.set(i, runningProduct);
    runningProduct *= nums[i];
   }

   for (let i=0; i < nums.length; i++) {
    ret.push(prefix.get(i) * postfix.get(i));
   }

   return ret;
};
