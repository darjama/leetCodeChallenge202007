var islandPerimeter = function(grid) {
  let result = 0;
  var findEdges = function(x, y) {
    if (grid[x] === undefined || grid[x][y] === undefined || grid[x][y] === 0) {
      result ++;
      return;
    }
    if (grid[x][y] === 'x') return;
    grid[x][y] = 'x';
    findEdges(x+1,y)
    findEdges(x, y+1)
    findEdges(x-1,y)
    findEdges(x,y-1)
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j]){
        findEdges(i,j);
        return result;
      } 
    }
  }
  return result;
};

/**
 * You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.
 * 
 * Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., 
 * one or more connected land cells).
 * 
 * The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is 
 * rectangular, width and height don't exceed 100. Determine the perimeter of the island.
 * 
 * Example:
 * 
 * Input:
 * [[0,1,0,0],
 *  [1,1,1,0],
 *  [0,1,0,0],
 *  [1,1,0,0]]
 * 
 * Output: 16
 * @param {number[][]} grid
 * @return {number}
 */
