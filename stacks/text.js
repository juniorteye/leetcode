// reverse 'polish notation

function reversePolishNotation(tokens){
    //create stack
    let stack = [];
    // loop through tokens and append  to the stack if it is an operand or function otherwise apply operation on stack elements and remove them
    for(let i =0; i < tokens.length; i++){
        let  token = tokens[i]; 
        let  isOperator = ['+', '-', '*','/']
        .indexOf(token) > -1 ;
        
        if(!isOperator){
            stack.push(token);
        }else{
            
           let operand2 = stack.pop();
           let operand1 = stack.pop();
           console.log(`${operand1} ${token} ${operand2}`);
           stack.push(`${operand1}${token}${operand2}`);
       }
    }
    return stack[0]
}
console.log(reversePolishNotation(["50","3", "17", "+", "2", "-", "/"]))