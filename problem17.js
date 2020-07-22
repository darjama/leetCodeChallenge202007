
var topKFrequent = function(nums, k) {
  let numMap = {};
  let tops = {};
  let min = Infinity;
  for (let i = 0; i < nums.length; i++) {
    numMap[nums[i]] = ~~numMap[nums[i]] + 1;
    if (Object.keys(tops).length < k || nums[i] in tops) {
      tops[nums[i]] = numMap[nums[i]];
      min = Math.min(...Object.values(tops))
    } else if (numMap[nums[i]] > min) {
      for (let key in tops) {
        if (tops[key] === min) delete tops[key]
      }
      tops[nums[i]] = numMap[nums[i]]
    }
  }
  return [...Object.keys(tops)]
};

/**
 * Top K Frequent Elements
 * Given a non-empty array of integers, return the k most frequent elements.
 * 
 * Example 1:
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 * 
 * Example 2:
 * Input: nums = [1], k = 1
 * Output: [1]
 * Note:
 * 
 * You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
 * Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
 * It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.
 * You can return the answer in any order.
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
