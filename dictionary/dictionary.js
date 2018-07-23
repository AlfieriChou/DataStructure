function Dictionary () {
  let items = []
  this.has = (key) => {
    return key in items
  }
  this.set = (key, value) => {
    items[key] = value
  }
  this.remove = (key) => {
    if (this.has(key)) {
      delete items[key]
      return true
    }
    return false
  }
  this.get = (key) => {
    return this.has(key) ? items[key] : undefined
  }
  this.value = () => {
    let values = []
    for (let k in items) {
      if (this.hasOwnProperty(k)) {
        values.push(items[k])
      }
    }
    return values
  }
  this.clear = () => {
    items = []
    return items
  }
  this.size = () => {
    return Object.keys(items).length
  }
  this.getItems = () => {
    return items
  }
}

const dictionary = new Dictionary()

dictionary.set('wang', 'jun')
dictionary.set('alfieri', 'chou')
dictionary.set('jack', 'liu')

console.log(dictionary.has('alfieri'))
console.log(dictionary.size())
console.log(dictionary.get('alfieri'))
console.log(dictionary.getItems())

dictionary.remove('wang')

console.log(dictionary.has('alfieri'))
console.log(dictionary.size())
console.log(dictionary.get('alfieri'))
console.log(dictionary.getItems())

// module.exports = Dictionary