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
    values = otherSet.values()
    for (let i = 0; i < values.length; ++i) {
      unionSet.add(values[i])
    }
    return unionSet
  }
  this.intersection = (otherSet) => {
    let intersectionSet = new Set()
    let values = this.values()
    for (let i = 0; i < values.length; ++i) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i])
      }
    }
    return intersectionSet
  }
  this.difference = (otherSet) => {
    let differenceSet = new Set()
    let values = this.values()
    for (let i = 0; i < values.length; ++i) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i])
      }
    }
    return differenceSet
  }
  this.subset = (otherSet) => {
    if (this.size() > otherSet.size()) {
      return false
    } else {
      let values = this.values()
      for (let i = 0; i < values.length; ++i) {
        if (!otherSet.has(values[i])) {
          return false
        }
      }
      return true
    }
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

// 并集
const setA = new Set()
setA.add(1)
setA.add(2)
setA.add(3)

const setB = new Set()
setB.add(3)
setB.add(4)
setB.add(5)

const unionAB = setA.union(setB)
console.log(unionAB.values())

// 交集
const setC = new Set()
setC.add(1)
setC.add(2)
setC.add(3)

const setD = new Set()
setD.add(3)
setD.add(4)
setD.add(5)

const intersectionCD = setC.intersection(setD)
console.log(intersectionCD.values())

// 差集
const setE = new Set()
setE.add(1)
setE.add(2)
setE.add(3)

const setF = new Set()
setF.add(3)
setF.add(4)
setF.add(5)

const differenceEF = setE.difference(setF)
console.log(differenceEF.values())

// 子集
const setG = new Set()
setG.add(1)
setG.add(2)

const setH = new Set()
setH.add(1)
setH.add(2)
setH.add(3)

const setI = new Set()
setI.add(2)
setI.add(3)
setI.add(4)

console.log(setG.subset(setH))
console.log(setG.subset(setI))