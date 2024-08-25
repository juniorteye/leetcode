//best solution
function firstDuplicate(nums) {
    // Check if the input array is not empty
    if (nums.length === 0) {
        return -1;
    }
    
    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1; // Get the index to mark as visited
        
        // If the number at current index is negative, it's a duplicate
        if (nums[index] < 0) {
            return Math.abs(nums[i]);
        }
        
        // Mark the number at index as visited by making it negative
        nums[index] = -nums[index];
    }
    
    // No duplicates found
    return -1;
}

// Example usage:
const arr = [2, 1, 3, 5, 3, 2];
console.log(firstDuplicate(arr)); // Output will be 3


//second solution

function firstDuplicate(nums) {
    const occurrences = {};

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        if (occurrences[current] !== undefined) {
            return current;
        } else {
            occurrences[current] = i;
        }
    }

    return -1;
}

// Example usage:
const array1 = [2, 1, 3, 5, 3, 2];
const array2 = [1, 2, 3, 4, 5];
const array3 = [1, 2, 3, 2, 1];

console.log(firstDuplicate(array1)); // Output: 3
console.log(firstDuplicate(array2)); // Output: -1
console.log(firstDuplicate(array3)); // Output: 2

 
