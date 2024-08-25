function bestDigits(number, numDigits) {
    let stack = [];
    let remainingDigitsToRemove = numDigits;

    for (let i = 0; i < number.length; i++){
        let currentDigit = number[i];

        // Compare with the top element of the stack
        while (remainingDigitsToRemove > 0 && stack.length > 0 && currentDigit > stack[stack.length - 1]) {
            stack.pop();
            remainingDigitsToRemove--;
        }
        stack.push(currentDigit);
    }
    // If there are remaining digits to remove, remove them from the end of the stack
    stack = stack.slice(0, stack.length - remainingDigitsToRemove);
    console.log('your answer is >>>',remainingDigitsToRemove)
    return stack.join('');
}
console.log(bestDigits("462839", 2))