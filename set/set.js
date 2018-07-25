function Set () {
  let items = {}
  // this.has = (value) => {
  //   return value in items
  // }
  this.has = (value) => {
    return items.hasOwnProperty(value)
  }
  this.add = (value) => {
    if (!this.has(value)) {
      items[value] = value
      return true
    }
    return false
  }
  this.remove = (value) => {
    if (this.has(value)) {
      delete items[value]
      return true
    }
    return false
  }
  this.clear = () => {
    items = {}
  }
  this.size = () => {
    return Object.keys(items).length
  }
  this.values = () => {
    return Object.keys(items)
  }
  this.union = (otherSet) => {
    let unionSet = new Set()
    let values = this.values()
    for (let i = 0; i < values.length; ++i) {
      unionSet.add(values[i])
    }
    values = otherSet.values
    for (let i = 0; i < values.length; ++i) {
      unionSet.add(values[i])
    }
    return unionSet
  }
}

const set = new Set()
set.add(1)
console.log(set.values())
console.log(set.has(1))
console.log(set.size())

set.add(2)
console.log(set.values())
console.log(set.has(2))
console.log(set.size())