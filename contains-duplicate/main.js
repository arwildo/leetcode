var containsDuplicate = function(nums) {
    let set = new Set()
    for (let i=0; i < nums.length; i++) {
            console.log(nums[i]);
                if (set.has(nums[i])) {
                    return true;
                }else{
                    set.add(nums[i]);
                }
    }
    console.log(set);
    return false;
};

console.log(containsDuplicate([1,2,3,1]));
