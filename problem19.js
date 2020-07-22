var addBinary = function(a, b) {
  let carry = 0
  let i = 1;
  let result = ''
  while (i <= Math.max(a.length, b.length)) {
    const aI = (i > a.length || a[a.length - i] === '0') ? 0 : 1;
    const bI = (i > b.length || b[b.length - i] === '0') ? 0 : 1;
    let sum = (aI + bI + carry);
    carry = Math.trunc(sum/2)
    sum = sum % 2
    result = sum.toString() + result;
    i++;
  }
  return carry === 1 ? '1' + result : result;
};

/**
 * Add Binary
 * Given two binary strings, return their sum (also a binary string).
 * 
 * The input strings are both non-empty and contains only characters 1 or 0.
 * 
 * Example 1:
 * Input: a = "11", b = "1"
 * Output: "100"
 * 
 * Example 2:
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 *  
 * Constraints:
 * Each string consists only of '0' or '1' characters.
 * 1 <= a.length, b.length <= 10^4
 * Each string is either "0" or doesn't contain any leading zero.
 * 
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
