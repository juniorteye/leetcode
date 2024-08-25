function sortStack(stack) {
    // Write your code here.
    if (stack.length === 0) {
        return stack;
    }
    let top = stack.pop();
    console.log('the top from main stack is >>>', top)
    sortStack(stack);
    insertInSortedOrder(stack, top);
    return stack;
}

function insertInSortedOrder(stack, value) {
    if (stack.length === 0 || stack[stack.length - 1] <= value) {
        stack.push(value);
        return;
    }
    let top = stack.pop();
    console.log('the top is >>>',top)
    insertInSortedOrder(stack, value);
    stack.push(top);
}
console.log(sortStack([-5,2,-2,4,3,1]))