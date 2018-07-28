function LinkedList() {
  const Node = function(element) {
    this.element = element
    this.next = null
  }
  let length = 0
  let head = null

  this.append = (element) => {
    const node = new Node(element)
    let current
    if(head === null) {
      head = node
    } else {
      current = head
      while(current.next) {
        current = current.next
      }
      current.next = node
    }
    length++
  }
  this.removeAt = (position) => {
    if (position > -1 && position < length) {
      let current = head
      let previous
      let index = 0
      if (position === 0) {
        head = current.next
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = current.next
      }
      length--
      return current.element
    } else {
      return null
    }
  }
  this.insert = (position, element) => {
    if (position >= 0 && position <= length) {
      let node = new Node(element)
      let current = head
      let previous
      let index = 0
      if (position === 0) {
        node.next = current
        head = node
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        node.next = current
        previous.next = node
      }
      length++
      return true
    } else {
      return false
    }
  }
  this.toString = () => {
    let current = head
    let string = ''
    while (current) {
      string += ", " + current.element
      current = current.next
    }
    return string.slice(1)
  }
  this.indexOf = (element) => {
    let current = head
    let index = 0
    while (current) {
      if (element === current.element) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }
  this.remove = (element) => {
    let index = this.indexOf(element)
    return this.removeAt(index)
  }
  this.isEmpty = () => {
    return length === 0
  }
  this.size = () => {
    return length
  }
  this.getHead = () => {
    return head
  }
}

let list = new LinkedList()
list.append(10)
list.append(15)
list.append(13)
list.append(12)
list.insert(2, 20)
console.log('------>', list.size())
console.log('------>', list.toString())