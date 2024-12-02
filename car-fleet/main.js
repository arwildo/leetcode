/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const cars = position.map((pos, idx) => [pos, speed[idx]]);
    cars.sort((a, b) => b[0] - a[0]);
    const stack = [];

    for (const [pos, speed] of cars) {
        let time = (target - pos) / speed;

        if (stack.length == 0 || time > stack[stack.length - 1]) {
            stack.push(time);
        }
    }

    return stack.length;
};
