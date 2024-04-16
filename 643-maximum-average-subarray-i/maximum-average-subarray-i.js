/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = 0;
    for(let i=0; i < k; i++){ // calculate sum of first k elements
        sum += nums[i];
    }
    let maxSum = sum;
    for(i=k; i<nums.length; i++){ // loop from k
        sum = sum - nums[i-k] + nums[i]; // decrement from start and add next items in loop
        maxSum = Math.max(maxSum,sum) // set max
    }
    return maxSum/k; // divide the max sum
};