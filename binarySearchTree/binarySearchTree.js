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