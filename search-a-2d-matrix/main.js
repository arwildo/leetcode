/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for (let i=0; i < matrix.length; i++) {
        let l = 0;
        let r = matrix[i].length - 1;

        while (l <= r) {
            let mid = Math.floor((l + r) / 2);

            if (matrix[i][mid] == target) {
                return true;
            } else if (matrix[i][mid] < target) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }

    return false;
};
