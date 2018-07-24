function HashTable () {
  let table = []
  const djb2HashCode = (key) => {
    let hash = 5381
    for (let i = 0; i < key.length; ++i) {
      hash = hash * 33 + key.charCodeAt(i)
    }
    return hash % 1013
  }
  this.put = (key, value) => {
    let position = djb2HashCode(key)
    console.log(position + ' - ' + key)
    table[position] = value
  }
  this.get = (key) => {
    return table[djb2HashCode(key)]
  }
  this.remove = (key) => {
    table[djb2HashCode(key)] = undefined
  }
  this.print = () => {
    for (let i = 0; i < table.length; ++i) {
      if (table[i] !== undefined) {
        console.log('------>', i + ": " + table[i])
      }
    }
  }
}

const hash = new HashTable()

hash.put('wang', 'jun')
hash.put('alfieri', 'chou')
hash.put('jack', 'liu')
hash.put('tony', 'yang')
hash.put('jack', 'liu')

hash.get('alfieri')

hash.print()