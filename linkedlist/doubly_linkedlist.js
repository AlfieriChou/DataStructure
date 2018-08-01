function DoublyLinkedList () {
  const Node = (element) => {
    this.element = element
    this.next = null
    this.prev = null
  }
  let length = 0
  let head = null
  let tail = null
  this.insert = (position, element) => {
    if (position >= 0 && position <= length) {
      let node = new Node(element)
      let current = head
      let previous
      let index = 0
      if (position === 0) {
        if (!head) {
          head = node
          tail = node
        } else {
          node.next = current
          current.prev = node
          head = node
        }
      } else if (position === length) {
        current = tail
        current.next = node
        node.prev = current
        tail = node
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        node.next = current
        previous.next = node
        current.prev = node
        node.prev = previous
      }
      length++
      return true
    } else {
      return false
    }
  }
}