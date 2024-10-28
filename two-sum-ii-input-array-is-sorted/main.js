/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}

     x = 9 - 7
    map = 2: 0, 
 
 */
var twoSum = function(numbers, target) {
   let map = new Map();

   for (let i=0; i < numbers.length; i++){
        let x = target - numbers[i];

        if (map.has(x)) {
            return [map.get(x), i+1];
        }

        map.set(numbers[i], i+1);
   } 
};
