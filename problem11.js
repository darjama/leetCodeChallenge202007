/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums, current = []) {
    //console.log(nums,current)
    let result = [];
    result.push(current);
    for ( let i = 0; i < nums.length; i ++) {
      const x = subsets(nums.slice(i+1), current.concat(nums[i]))
      result = [...result, ...x]
    }
    return result;
};

