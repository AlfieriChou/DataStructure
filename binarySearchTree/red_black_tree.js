let RedBlackTree = (() => {
  let Colors = {
    RED: 0,
    BLACK: 1
  }
  class Node {
    constructor(key, color) {
      this.key = key
      this.left = null
      this.right = null
      this.color = color
      this.flipColor = function() {
        if(this.color === Colors.RED) {
          this.color = Colors.BLACK
        } else {
          this.color = Colors.RED
        }
      }
    }
  }
  class RedBlackTree {
    constructor() {
      this.root = null
    }
    getRoot() {
      return this.root
    }
    isRed(node) {
      if(!node) {
        return false
      }
      return node.color === Colors.RED
    }
    flipColors(node) {
      node.left.flipColor()
      node.right.flipColor()
    }
    rotateLeft(node) {
      let temp = node.right
      if(temp !== null) {
        node.right = temp.left
        temp.left = node
        temp.color = node.color
        node.color = Colors.RED
      }
      return temp
    }
    rotateRight(node) {
      let temp = node.left
      if(temp !== null) {
        node.left = temp.right
        temp.right = node
        temp.color = node.color
        node.color = Colors.RED
      }
      return temp
    }
    insertNode(node, element) {
      if(node === null) {
        return new Node(element, Colors.RED)
      }
      let newRoot = node
      if(element < node.key) {
        node.left = this.insertNode(node.left, element)
      } else if(element > node.key) {
        node.right =this.insertNode(node.right, element)
      } else {
        node.key = element
      }
      if(this.isRed(node.right) && !this.isRed(node.left)) {
        newRoot = this.rotateLeft(node)
      }
      if(this.isRed(node.left) && this.isRed(node.left.left)) {
        newRoot = this.rotateRight(node)
      }
      if(this.isRed(node.left) && this.isRed(node.right)) {
        this.flipColors(node)
      }
      return newRoot
    }

    insert(element) {
      this.root = this.insertNode(this.root, element)
      this.root.color = Colors.BLACK
    }
  }
  return RedBlackTree
})()

var rbTree = new RedBlackTree()

rbTree.insert(1)
rbTree.insert(2)
rbTree.insert(3)
rbTree.insert(4)
rbTree.insert(5)
rbTree.insert(6)
rbTree.insert(7)
rbTree.insert(14)
rbTree.insert(15)
rbTree.insert(13)
rbTree.insert(12)
rbTree.insert(11)

console.log('---->', rbTree.getRoot())