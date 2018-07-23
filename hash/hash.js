function HashTable () {
  let table = []
  const loseloseHashCode = (key) => {
    let hash = 0
    for (let i = 0; i < key.length; ++i) {
      hash += key.charCodeAt(i)
    }
    return hash % 37
  }
  this.put = (key, value) => {
    let position = loseloseHashCode(key)
    console.log(position + ' - ' + key)
    table[position] = value
  }
  this.get = (key) => {
    return table[loseloseHashCode(key)]
  }
  this.remove = (key) => {
    table[loseloseHashCode(key)] = undefined
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