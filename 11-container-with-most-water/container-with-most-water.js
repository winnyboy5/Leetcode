/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
    // i and j are pointers to the start and end of the array respectively.
    let i=0, j=height.length-1;
    
    // max is used to store the maximum area found so far. Initially it is set to 0.
    let max = 0
    
    // The loop continues until the two pointers meet.
    while(i < j){
        // At each step, we calculate the area formed by the bars pointed by i and j.
        // The height of the water is determined by the shorter bar and the width is the distance between i and j.
        // We update max if the calculated area is greater than the current max.
        max = Math.max(max, (j-i) * Math.min(height[i], height[j]))
        
        // To try and increase the area, we move the pointer pointing to the shorter bar towards the other pointer.
        // This is because moving the pointer pointing to the taller bar would not increase the height but decrease the width.
        if(height[i] <= height[j]){
            i++
        } else {
            j--;
        }
    }
    // Return the maximum area found.
    return max;
};