function BinarySearchTree () {
  let Node = function (key) {
    this.key = key
    this.left = null
    this.right = null
  }
  let root = null
  const insertNode = (node, newNode) => {
    if (newNode.key < node.key) {
      node.left === null ? node.left = newNode : insertNode(node.left, newNode)
    } else {
      node.right === null ? node.right = newNode : insertNode(node.right, newNode)
    }
  }
  const inOrderTraverseNode = (node, callback) => {
    if (node !== null) {
      console.log('------>', node)
      inOrderTraverseNode(node.left, callback)
      callback(node.key)
      inOrderTraverseNode(node.right, callback)
    }
  }
  const preOrderTraverseNode = (node, callback) => {
    if (node !== null) {
      console.log('------>', node)
      callback(node.key)
      preOrderTraverseNode(node.left, callback)
      preOrderTraverseNode(node.right, callback)
    }
  }
  const postOrderTraverseNode = (node, callback) => {
    if (node !== null) {
      console.log('------>', node)
      postOrderTraverseNode(node.left, callback)
      postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }
  const minNode = (node) => {
    if (node) {
      while (node && node.left !== null) {
        node = node.left
      }
      return node.key
    }
    return null
  }
  const maxNode = (node) => {
    if (node) {
      while (node && node.right !== null) {
        node = node.right
      }
      return node.key
    }
    return null
  }
  const searchNode = (node, key) => {
    return node === null ? false : key < node.key ? searchNode(node.left, key) : key > node.key ? searchNode(node.right, key) : true
    // if (node === null) {
    //   return false
    // }
    // if (key < node.key) {
    //   return searchNode(node.left, key)
    // } else if (key > node.key) {
    //   return searchNode(node.right, key)
    // } else {
    //   return true
    // }
  }
  this.insert = (key) => {
    let newNode = new Node(key)
    root === null ? root = newNode : insertNode(root, newNode)
  }
  this.inOrderTraverse = (callback) => {
    inOrderTraverseNode(root, callback)
  }
  this.preOrderTraverse = (callback) => {
    preOrderTraverseNode(root, callback)
  }
  this.postOrderTraverse = (callback) => {
    postOrderTraverseNode(root, callback)
  }
  this.min = () => {
    return minNode(root)
  }
  this.max = () => {
    return maxNode(root)
  }
  this.search = (key) => {
    return searchNode(root, key)
  }
}

const tree = new BinarySearchTree()

tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(8)
tree.insert(17)
tree.insert(10)
tree.insert(16)
tree.insert(21)
tree.insert(28)

function printNode (value) {
  console.log(value)
}

// 中序遍历
// tree.inOrderTraverse(printNode)

// 先序遍历
// tree.preOrderTraverse(printNode)

// 后序遍历
// tree.postOrderTraverse(printNode)

console.log(tree.min())
console.log(tree.max())

console.log(tree.search(1) ? 'Key 1 found' : 'Key 1 not found')
console.log(tree.search(7) ? 'Key 7 found' : 'Key 7 not found')
