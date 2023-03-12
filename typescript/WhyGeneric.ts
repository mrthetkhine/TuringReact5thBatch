class Stack<Type>
{
    items:Array<Type> = [];

    push(element:Type)
    {
        this.items.push(element);
    }
    pop()
    {
        return this.items.pop();
    }
}
let stack = new Stack<number>();
stack.push(10);
//stack.push('Hello');
console.log('Stack ',stack.pop());

let strStack = new Stack<string>();
strStack.push('Hello');
console.log('Stack ',strStack.pop());