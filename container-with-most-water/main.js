/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let stack = [];

    let l = 0;
    let r = height.length - 1;

    while (l < r) {
        let calc = Math.min(height[l], height[r]) * (r - l);

        if ( stack.length === 0 ) {
            stack.push(calc);
        } else if (calc > stack[stack.length - 1]) {
            stack.push(calc);
        }

        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }
    
    return stack[stack.length - 1];
};
