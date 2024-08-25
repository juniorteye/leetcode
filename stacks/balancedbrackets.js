function balancedBrackets(string) {
    const stack = [];

    for (let i = 0; i < string.length; i++) {
        const currentBracket = string[i];

        if (currentBracket === '(' || currentBracket === '[' || currentBracket === '{') {
            // If it's an opening bracket, push it onto the stack
            stack.push(currentBracket);
        } else if (currentBracket === ')' || currentBracket === ']' || currentBracket === '}') {
            // If it's a closing bracket, check if the stack is empty
            if (stack.length === 0) {
                return false; // No matching opening bracket
            }

            // Pop the last element from the stack
            const lastBracket = stack.pop();
            console.log('the lastBracket is >>>>', lastBracket)

            // Check if the popped bracket matches the current closing bracket
            if (
                (currentBracket === ')' && lastBracket !== '(') ||
                (currentBracket === ']' && lastBracket !== '[') ||
                (currentBracket === '}' && lastBracket !== '{')
            ) {
                return false; // Mismatched brackets
            }
        }
    }

    // After iterating through the entire string, the stack should be empty for balanced brackets
    return stack.length === 0;
}

console.log(balancedBrackets("([])(){}"));
