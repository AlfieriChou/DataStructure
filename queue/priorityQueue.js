function PriorityQueue () {
  let items = []
  function QueueElement (element, priority) {
    this.element = element
    this.priority = priority
  }
  this.enqueue = (element, priority) => {
    const queueElement = new QueueElement(element, priority)
    if (this.isEmpty()) {
      items.push(queueElement)
    } else {
      let added = false
      for (let i = 0; i < items.length; ++i) {
        if (queueElement.priority < items[i].priority) {
          items.splice(i, 0, queueElement)
          added = true
          break
        }
      }
      if (!added) {
        items.push(queueElement)
      }
    }
  }
  this.dequeue = () => {
    return items.shift()
  }
  this.front = () => {
    return items[0]
  }
  this.isEmpty = () => {
    return items.length === 0
  }
  this.clear = () => {
    return items = []
  }
  this.size = () => {
    return items.length
  }
  this.print = () => {
    return JSON.stringify(items)
  }
}

// const priorityQueue = new PriorityQueue()
// priorityQueue.enqueue('John', 1)
// priorityQueue.enqueue('Tom', 2)
// priorityQueue.enqueue('Jack', 1)
// console.log(priorityQueue.print())

module.exports = PriorityQueue