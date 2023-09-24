class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let current = this.root;
    let target;  //the next spot to possibly place the newNode;
    const newNode = new Node(val);

    //if there is no root node, make the new one root and return the tree
    if (!current){
        this.root = newNode;
        return this;
    }

    let searching = true;
    while (searching){
      //choose left or right
      let goLeft;
      if(val < current.val){
        goLeft = true; //choose left
        target = current.left; //update target
      } else {
        goLeft = false;//choose right
        target = current.right; //update target
      }

      //update current left/right and set search to false
      if(!target){
        if(goLeft) current.left = newNode;
        if(!goLeft) current.right = newNode;
        searching = false;
      }

      current = target;  //update current for next itteration
    }
    return this;

  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    let current = this.root;
    const newNode = new Node(val);

    //if there is no root node, make the new one root and return the tree
    if (!current){
        this.root = newNode;
        return this;
    }

    function search(current){
      //choose left or right
      let goLeft;
      let target;  //the next spot to possibly place the newNode;
      if(val < current.val){
        goLeft = true; //choose left
        target = current.left; //update target
      } else {
        goLeft = false;//choose right
        target = current.right; //update target
      }

      //if the child node doesn't exist place new node there by
      //updating current left/right and return
      if(!target){
        if(goLeft) current.left = newNode;
        if(!goLeft) current.right = newNode;
        return; 
      } else {  //if child node does exist repeate steps with child node as the current node
        search(target);
      }
    }
    search(current);
    return this;

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */
  find(val) {
    let current = this.root;
    while (true){
      if(!current){
        return -1;
      }

      if (val === current.val){
        return current;
      }

      //choose left or right
      if(val < current.val){
        current = current.left; //update current to search the next left node
      } else {
        current = current.right; //update current to search the next right node
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
      if(!current){
        return -1;
      }

      if (val === current.val){
        return current;
      }

      //choose left or right
      if(val < current.val){
        current = current.left; //update current to search the next left node
      } else {
        current = current.right; //update current to search the next right node
      }

      return this.findRecursively(val, current);
    
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

var binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(15).insert(20).insert(10).insert(12);
binarySearchTree.insertRecursively(15).insertRecursively(20).insertRecursively(10).insertRecursively(12);
console.log(binarySearchTree.root.val) // 15
console.log(binarySearchTree.root.right.val) // 20
console.log(binarySearchTree.root.left.right.val) // 12

// var foundNode = binarySearchTree.find(20);
var foundNode = binarySearchTree.findRecursively(20);
console.log("value: ", foundNode.val) // 20
console.log("left", foundNode.left) // null
console.log("right", foundNode.right) // null

// foundNode = binarySearchTree.find(120);
foundNode = binarySearchTree.findRecursively(120);
console.log(foundNode) // undefined


module.exports = BinarySearchTree;
