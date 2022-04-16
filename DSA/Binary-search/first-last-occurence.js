/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let firstIndex = -1;
  let lastIndex = -1;

  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
        let mid = Math.floor((start + end) / 2);


    if (target === nums[mid]) {
      firstIndex = mid;
      lastIndex = mid;

      while (nums[firstIndex - 1] === target) {
        firstIndex -= 1;
      }
      while (nums[lastIndex + 1] === target) {
        lastIndex += 1;
      }
      return [firstIndex, lastIndex];
    } else if (target < nums[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return [firstIndex, lastIndex];
};

let nums = [5, 7, 7, 8, 8, 8,8,8, 10,10];
let target = 10;
// Output: [-1,-1]

console.log(searchRange(nums, target));
