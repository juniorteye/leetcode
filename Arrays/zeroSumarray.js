function zeroSumSubarray(nums) {
    // Write your code here.
    const sums = new Set()
    let count = 0
    for(const num of nums){
      sums.add(count)
      count += num
        if(sums.has(count)) return true
    }
    return false;
  }
  // Do not edit the line below.
  exports.zeroSumSubarray = zeroSumSubarray;
  