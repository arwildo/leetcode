/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let row = Array.from({length: 9}, () => new Set());
    let column = Array.from({length: 9}, () => new Set());
    let subgrid = Array.from({length: 9}, () => new Set());

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] != ".") {
                // check dups for row
                if (row[i].has(board[i][j])) {
                    return false
                } else {
                    row[i].add(board[i][j]);
                }
                // check dups for column
                if (column[j].has(board[i][j])) {
                    return false
                } else {
                    column[j].add(board[i][j]);
                }

                let grid_index = Math.floor(i/3) * 3 + Math.floor(j/3);
                // check dups for column
                if (subgrid[grid_index].has(board[i][j])) {
                    return false;
                } else {
                    subgrid[grid_index].add(board[i][j]);
                }
            }
        }
    }
    return true;
};
