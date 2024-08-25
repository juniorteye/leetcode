function sunsetViews(buildings, direction) {
    // Check if the view direction is EAST
    let eastward = direction === "EAST";

    // Reverse the order of buildings if the view is EAST
    if (eastward) {
        buildings.reverse();
    }

    // Initialize variables to track the maximum height and the result array
    let max = 0;
    let result = [];

    // Iterate through each building's height using a for loop
    for (let i = 0; i < buildings.length; i++) {
        let height = buildings[i];

        // Check if the current building has a higher height than the previous maximum
        if (height > max) {
            // Update the maximum height
            max = height;

            // Add the current building's index to the result array
            // Adjust the index based on the original or reversed order
            result.push(eastward ? buildings.length - i - 1 : i);
        }
    }

    // If the view is EAST, reverse the result array to get the correct order
    return eastward ? result.reverse() : result;
}
// Example usage:
let buildings = [3, 5, 1, 4, 2];
let direction = "WEST";
console.log(sunsetViews(buildings, direction));
