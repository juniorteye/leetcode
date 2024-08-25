function isMonotonic(arr) {
    if (arr.length <= 1) {
        return true; // Empty or single-element arrays are considered monotonic
    }

    let increasing = false;
    let decreasing = false;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            increasing = true;
        } else if (arr[i] < arr[i - 1]) {
            decreasing = true;
        }

        // If both flags are set, array is not monotonic
        if (increasing && decreasing) {
            return false;
        }
    }
    // If either flag is set or neither, array is monotonic
    return true;
}

// Example usage:
const arr1 = [6, 5, 4, 4];
const arr2 = [1, 3, 2];
const arr3 = [1, 2, 2, 3];

console.log(isMonotonic(arr1)); // Output: true
console.log(isMonotonic(arr2)); // Output: false
console.log(isMonotonic(arr3)); // Output: true
