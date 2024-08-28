function isValid(s) {
    const stack = [];
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);  // Push opening brackets onto the stack
        } else {
            const top = stack.pop();  // Pop the top element of the stack
            if (top !== bracketMap[char]) {
                return false;  // If the popped element doesn't match the corresponding opening bracket, return false
            }
        }
    }

    return stack.length === 0;  // If the stack is empty at the end, the string is valid
}
