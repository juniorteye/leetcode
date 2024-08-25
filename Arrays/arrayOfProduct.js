function productExceptSelf(nums) {
    const n = nums.length;
    
    // Initialize left and right product arrays
    const leftProducts = new Array(n).fill(1);
    const rightProducts = new Array(n).fill(1);
    const output = new Array(n);

    // Calculate left products
    for (let i = 1; i < n; i++) {
        leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
    }

    // Calculate right products
    for (let i = n - 2; i >= 0; i--) {
        rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
    }
    
    // Compute the final result
    for (let i = 0; i < n; i++) {
        output[i] = leftProducts[i] * rightProducts[i];
    }
    return output;
}
