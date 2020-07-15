var reverseWords = function(s) {
  let wordEnd = -1, length = s.length;
  for (let i = length-1; i >=0; i--) {
    if ((s[i] === ' ' && wordEnd !== -1)) {
      s += s.substring(i, wordEnd + 1);
      wordEnd = -1;
    } else if (!i) {
      s += ' ' + s.substring(0, wordEnd > -1 ? wordEnd + 1 : 1);
    }
    
    if (s[i] !== ' ' && wordEnd === -1) wordEnd = i;
  }
  return s.substring(length).trim();
};

// this one works, but seems less in the spirit of the question:
// var reverseWords = function(s) {
//   return s.replace(/  +/g, ' ').trim().split(' ').reverse().join(' ');
// };

/**
 * Reverse Words in a String
 * 
 * Given an input string, reverse the string word by word.
 * 
 * Example 1:
 * Input: "the sky is blue"
 * Output: "blue is sky the"
 * 
 * Example 2:
 * Input: "  hello world!  "
 * Output: "world! hello"
 * Explanation: Your reversed string should not contain leading or trailing spaces.
 * 
 * Example 3:
 * Input: "a good   example"
 * Output: "example good a"
 * Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 *  
 * Note:
 * A word is defined as a sequence of non-space characters.
 * Input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
 * You need to reduce multiple spaces between two words to a single space in the reversed string.
 * 
 * @param {string} s
 * @return {string}
 */
