let Queue = () => {
  let items = []
  this.enqueue = (element) => {
    items.push(element)
    return items
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
    return items.toString()
  }
}

module.exports = Queue
