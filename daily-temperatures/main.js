/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const stack = [];
    const result = Array(temperatures.length).fill(0);

    for (let i=0; i < temperatures.length; i++) {
        while (stack.length !== 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let prev_index = stack.pop();
            result[prev_index] = i - prev_index;
        }
        
        stack.push(i);
    }

    return result;
};
