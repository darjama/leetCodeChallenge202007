var nthUglyNumber = function(n) {
  let dp = [1,2,3,4];
  let x5 = 0;
  let x3 = 1;
  let x2 = 2;
  while (dp.length <  n) {
    const a  = dp[x2]*2, b = dp[x3]*3, c = dp[x5]*5
    dp.push(Math.min(a,b,c));
    if (dp[dp.length - 1] === c) x5 ++;
    if (dp[dp.length - 1] === b) x3 ++;
    if (dp[dp.length - 1] === a) x2 ++;
  }
  return dp[n-1];
};

/**
 * Ugly Number II
 * 
 * Write a program to find the n-th ugly number.
 * 
 * Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. 
 * 
 * Example:
 * 
 * Input: n = 10
 * Output: 12
 * Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.
 * Note:  
 * 
 * 1 is typically treated as an ugly number.
 * n does not exceed 1690.
 * @param {number} n
 * @return {number}
 */
