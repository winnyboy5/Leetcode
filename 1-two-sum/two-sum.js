/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// This function finds two numbers in an array that add up to a specific target number.
const twoSum = (nums, target) => {
    // If the input array is empty, return an empty array as there are no numbers to sum.
    if(nums.length===0) return [];
    
    // Create a new Map to store each number and its index. 
    // Maps in JavaScript can store key-value pairs and allow any data type to be used for the keys.
    m = {};
    
    // Loop through the array.
    for(let i in nums){
        // For each number, check if there is another number previously stored in the map that adds up to the target.
        // If such a number exists, return an array with the indices of these two numbers.
        if(m[target-nums[i]]) return [i,m[target-nums[i]]]
        
        // If no such number exists, add the current number and its index to the map.
        m[nums[i]] = i
    }
    
    // If the loop finishes without finding two numbers that add up to the target, return an empty array.
    return []
};