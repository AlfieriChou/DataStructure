class Stack {
  constructor () {
    this.items = []
  }
  push (element) {
    this.items.push(element)
  }
  pop () {
    return this.items.length == 0 ? 'Underflow' : this.items.pop()
  }
  peek () {
    return this.items[this.items.length - 1]
  }
  isEmpty () {
    return this.items.length === 0
  }
  print () {
    let str = ''
    let i = 0
    while (i < this.items.length) {
      str += this.items[i] + " "
      i++
    }
    return str
  }
}

const stack = new Stack()
console.log(stack.isEmpty())
console.log(stack.pop())

stack.push(10)
stack.push(20)
stack.push(30)

console.log(stack.print())
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.print())