/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let current_color = image[sr][sc];
    let height = image.length;
    let width = image[0].length;

    function dfs(sr, sc) {
        if (sr >= 0 && sr < height && sc >= 0 && sc < width && image[sr][sc] == current_color && image[sr][sc] != color) {
            image[sr][sc] = color;
            dfs(sr+1, sc);
            dfs(sr-1, sc);
            dfs(sr, sc+1);
            dfs(sr, sc-1);
        }
    }

    dfs(sr, sc);
    return image;
};

