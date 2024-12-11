/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let low = 1;
    let high = Math.max(...piles);

    while (low < high) {
        let k = Math.floor((high + low) / 2);
        let totalHours = 0;

        for (let i=0; i < piles.length; i++) {
            totalHours += Math.ceil(piles[i] / k);     

            if (totalHours > h) {
                break;
            }
        }

        if (totalHours <= h) {
            high = k;
        } else {
            low = k + 1;
        }
    }

    return high;
};
