/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let max_l = 0;
    let max_r = 0;
    let body_water_count = 0; 

    let l = 0;
    let r = height.length - 1;
    
    while (l < r) {
        if (height[l] < height[r]) {
            if(height[l] > max_l) {
                max_l = height[l];
            } else {
                body_water_count += (max_l - height[l]);
            }
            l++;
        } else {
            if(height[r] > max_r) {
                max_r = height[r];
            } else {
                body_water_count += (max_r - height[r]);
            }
            r--;
        }
    }

    return body_water_count;
};
