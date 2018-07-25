class Queue {
  constructor () {
    this.items = []
  }
  isEmpty () {
    return this.items.length === 0
  }
  enqueue (element) {
    this.items.push(element)
  }
  dequeue () {
    return this.isEmpty() ? 'Underflow' : this.items.shift()
  }
  front () {
    return this.isEmpty() ? 'No elements in Queue' : this.items[0]
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

const queue = new Queue()
console.log(queue.dequeue())
console.log(queue.isEmpty())

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.enqueue(60)

console.log(queue.front())
console.log(queue.dequeue())
console.log(queue.front())
console.log(queue.dequeue())
console.log(queue.print())