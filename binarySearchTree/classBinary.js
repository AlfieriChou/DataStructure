class Node {
  constructor (data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor () {
    this.root = null
  }
   insertNode (node, newNode) {
    switch (newNode.data < node.data) {
      case true:
        node.left === null ? node.left = newNode : this.insertNode(node.left, newNode)
        break
      case false:
        node.right === null ? node.right = newNode : this.insertNode(node.right, newNode)
        break
    }
  }
  removeNode(node, key) {
    if (node === null) {
      return null
    } else if (key < node.data) {
      node.left = this.removeNode(node.left, key)
      return node
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key)
      return node
    } else {
      if (node.left === null && node.right === null) {
          node = null
          return node
      }
      if (node.left === null) {
        node = node.right
        return node
      } else if (node.right === null) {
        node = node.left
        return node
      }
      var aux = this.findMinNode(node.right)
      node.data = aux.data
      node.right = this.removeNode(node.right, aux.data)
      return node
    }
  }
  findMinNode (node) {
    return node.left === null ? node : this.findMinNode(node.left)
  }
  insert (data) {
    let newNode = new Node(data)
    this.root === null ? this.root = newNode : this.insertNode(this.root, newNode)
  }
  remove(data){
    this.root = this.removeNode(this.root, data)
  }
  inorder(node){
    if(node !== null){
      // console.log('------>', node)
      this.inorder(node.left)
      console.log(node.data)
      this.inorder(node.right)
    }
  }
  preorder(node){
    if(node !== null){
      // console.log('------>', node)
      console.log(node.data)
      this.preorder(node.left)
      this.preorder(node.right)
    }
  }
  postorder(node){
    if(node !== null){
      // console.log('------>', node)
      this.postorder(node.left)
      this.postorder(node.right)
      console.log(node.data)
    }
  }
  getRootNode(){
    return this.root
  }
  search(node, data){
    return node === null ? null : data < node.data ? this.search(node.left, data) : data > node.data ? this.search(node.right, data) : node
    // if(node === null) {
    //   return null
    // } else if(data < node.data) {
    //   return this.search(node.left, data)
    // }else if(data > node.data) {
    //   return this.search(node.right, data)
    // } else {
    //   return node
    // }
  }
}

var BST = new BinarySearchTree()
BST.insert(15)
BST.insert(25)
BST.insert(10)
BST.insert(7)
BST.insert(22)
BST.insert(17)
BST.insert(13)
BST.insert(5)
BST.insert(9)
BST.insert(27)

var root = BST.getRootNode()
BST.inorder(root)