function HashTable () {
  let table = []
  const loseloseHashCode = (key) => {
    let hash = 0
    for (let i = 0; i < key.length; ++i) {
      hash += key.charCodeAt(i)
    }
    return hash % 37
  }
  const ValuePair = (key, value) => {
    this.key = key
    this.value = value
    this.toString = () => {
      return '[' + this.key + ' - ' + this.value + ']'
    }
  }
  // linkedlist方法还未写
  this.put = (key, value) => {
    const position = loseloseHashCode(key)
    if (table[position] === undefined) {
      table[position] = new LinkedList()
    }
    table[position].append(new ValuePair(key, value))
  }
  this.get = () => {
    const position = loseloseHashCode(key)
    if (table[position] !== undefined) {
      let current = table[position].getHead()
      while (current.next) {
        if (current.element.key === key) {
          return current.element.value
        }
        current = current.next
      }
      if (current.element.key === key) {
        return current.element = value
      }
    }
    return undefined
  }
}