class QElement {
  constructor (element, priority) {
    this.element = element
    this.priority = priority
  }
}

class PriorityQueue {
  constructor () {
    this.items = []
  }
  isEmpty () {
    return this.items.length === 0
  }
  enqueue (element, priority) {
    let qElement = new QElement(element, priority)
    let contain = false
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > qElement.priority) {
        this.items.splice(i, 0, qElement)
        contain = true
        break
      }
    }
    if (!contain) {
      this.items.push(qElement)
    }
  }
  dequeue () {
    return this.isEmpty() ? 'Underflow' : this.items.shift()
  }
  front () {
    return this.isEmpty() ? 'No elements in Queue' : this.items[0]
  }
  rear () {
    return this.isEmpty() ? 'No elements in Queue' : this.items[this.items.length - 1]
  }
  print () {
    let str = ''
    for (let i = 0; i < this.items.length; ++i) {
      str += this.items[i].element + " "
    }
    return str
  }
}

const priorityQueue = new PriorityQueue()
priorityQueue.enqueue("Alfieri", 2)
priorityQueue.enqueue("Chou", 1)
priorityQueue.enqueue("Wang", 1)
priorityQueue.enqueue("Jun", 2)
priorityQueue.enqueue("Jack", 3)

console.log(priorityQueue.front().element)
console.log(priorityQueue.rear().element)
console.log(priorityQueue.print())