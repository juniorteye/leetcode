class MinMaxStack{
    constructor(){
        this.stack = [];
        this.minmaxstack = [] //4,7,10,12
    }

    push(value){
        const newMinMax = {min:value, max:value}
        console.log('the newMinMax value is >>>', newMinMax)
        if(this.minmaxstack.length > 0){
            let lastMinMax = this.minmaxstack[this.minmaxstack.length-1]
            console.log('the lastMinMax is >>>', lastMinMax)
            newMinMax.min = Math.min(lastMinMax.min, value)
            newMinMax.max = Math.max(lastMinMax.max, value)
        }
        this.minmaxstack.push(newMinMax)
        this.stack.push(value)
    }

    peek(){
        if(this.stack.length === 0 ) return null   
        console.log('the stack value is given as >>>',this.stack)
        return this.stack[this.stack.length-1]
    }

    pop(){
        if(this.stack.length === 0) return null
        this.minmaxstack.pop()
       return this.stack.pop()
    }

    getMin(){
        if(this.minmaxstack.length === 0) return null
        return this.minmaxstack[this.minmaxstack.length -1].min;
    }

    getMax(){
        if(this.minmaxstack.length === 0) return null
        return this.minmaxstack[this.minmaxstack.length-1].max;
    }
}
//providing some testcases
const minMaxStack = new MinMaxStack()
minMaxStack.push(3)
minMaxStack.push(6)
minMaxStack.push(1)

console.log('the Peek is >>>', minMaxStack.peek())
console.log('the min value is >>>', minMaxStack.getMin())
console.log('the max value is >>>', minMaxStack.getMax())

minMaxStack.pop()
console.log('the Peek is >>>', minMaxStack.peek())
console.log('the min value is >>>', minMaxStack.getMin())
console.log('the max value is >>>', minMaxStack.getMax())




//why do we need the stack values
