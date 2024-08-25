function reversePolishNotation(tokens) {
    // Write your code here.
    let stack = [];
  
    for(let i = 0; i < tokens.length; i++){
      let char = tokens[i];
  
      if(char === "+"){
        stack.push(stack.pop() + stack.pop());
      } else if(char === "-"){
        let num1 = stack.pop();
        stack.push(stack.pop() - num1);
      } else if(char === "*"){
        stack.push(stack.pop() * stack.pop());
      } else if(char === "/"){
        let num1 = stack.pop();
        stack.push(Math.trunc(Number(stack.pop() / num1)));
      } else {
        stack.push(Number(char));
      }
    }
    return Math.trunc(stack.pop()); // Removed Math.floor here
}

// review solution:
function reversePolishNotation(tokens){
  //create stack
  let stack = [];
  // loop through tokens and append  to the stack if it is an operand or function otherwise apply operation on stack elements and remove them
  for(let i =0; i < tokens.length; i++){
      let  token = tokens[i]; 
      let  isOperator = ['+','-','*','/'].indexOf(token)> -1;
      
      
      if(!isOperator){
          stack.push(parseFloat(token));
      }else{
          
         let operand2 = stack.pop();
         let operand1 = stack.pop();
         let result;
        switch(token){
          case "+":
            result = operand1 + operand2
            break;
          case "-":
            result = operand1 - operand2
            break;
          case "*":
            result = operand1 * operand2
            break;
          case "/":
            result = operand1 / operand2
            break
        }
         console.log(`${operand1} ${token} ${operand2}`);
         stack.push(Math.trunc(result));
     }
  }
  return stack[0]
}
  