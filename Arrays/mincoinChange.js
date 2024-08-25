function nonConstructibleChange(coins) {
    coins.sort((a, b) => a - b); // Sort the coins in ascending order

    let currentChange = 0; // Initialize the currentChange to 0

    for (const coin of coins) {
        // If the current coin value is greater than the currentChange + 1,
        // it means we can't create the sum currentChange + 1
        if (coin > currentChange + 1) {
            return currentChange + 1; // Minimum change we can't create
        }

        currentChange += coin; // Update currentChange with the new coin value
    }

    return currentChange + 1; // If all sums can be created, return currentChange + 1
}

console.log(nonConstructibleChange([5,7,1,1,2,3,22]));


function nonConstructibleChange(coins) {
    if(!coins.length) return 1
   coins.sort((a,b)=> a-b)
   let mincoin = 0
   for(let i=0; i < coins.length; i++){
     if(coins[i] > mincoin + 1  ) break
     mincoin +=coins[i]
   }
   return mincoin +1
}
