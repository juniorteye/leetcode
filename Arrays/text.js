function largestRectangleUnderSkyline(building) {
  let stack = [];

  for (let i = 0; i < building.length; i++) {
    let currHeight = building[i];
    while (stack.length && building[stack[stack.length - 1]] >= currHeight) {
      let topIdx = stack.pop();
      if (!stack.length) {
        // base case: the height of the first bar is 0
        currHeight = 0;
      } else {
        // calculate the width from the top of the stack to current position
        let width = i - stack[stack.length - 1] - 1;
        // get the maximum area with the current height and the height on the top of the stack
        let area = currHeight * width;
        // update the result by adding this area to the total number of areas in the stack
        // which stores the cumulative areas
        let topArea = building[topIdx] * (i - topIdx);
        stack[stack.length - 1] = area + topArea;
      }

      }
      stack.push(i);
    }
    let maxArea = 0;
    for (let j = 0, len = stack.length; j < len; j++) {
      maxArea += stack[j];
    }
    return maxArea;
  }

  console.log(largestRectangleUnderSkyline([1,3,3,2,4,1,5,3,2]))

