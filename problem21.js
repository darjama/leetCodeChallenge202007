var exist = function(board, word) {
  var traverse = function(y, x, word) {
    if (!word.length) return true;
    if (y < 0 || x < 0 || y >= board.length || x >= board[0].length) return false;
    if (board[y][x] !== word[0] || checked[y][x] === 1) return false;
    checked[y][x] = 1;
    if (traverse(y-1, x, word.substring(1))) return true;
    if (traverse(y, x-1, word.substring(1))) return true;
    if (traverse(y+1, x, word.substring(1))) return true;
    if (traverse(y, x+1, word.substring(1))) return true;
    checked[y][x] = 0;
    return false;
  }
  let checked = Array(board.length).fill(0).map(() => Array(board[0].length).fill(0));
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[0].length; x++) {
      if (traverse(y, x, word)) return true;
    }
  }
  return false;
};
/**
 * Word Search
 * Given a 2D board and a word, find if the word exists in the grid.
 * 
 * The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. 
 * The same letter cell may not be used more than once.
 * 
 * Example:
 * board =
 * [
 *   ['A','B','C','E'],
 *   ['S','F','C','S'],
 *   ['A','D','E','E']
 * ]
 * 
 * Given word = "ABCCED", return true.
 * Given word = "SEE", return true.
 * Given word = "ABCB", return false.
 *  
 * Constraints:
 * board and word consists only of lowercase and uppercase English letters.
 * 1 <= board.length <= 200
 * 1 <= board[i].length <= 200
 * 1 <= word.length <= 10^3
 * 
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
