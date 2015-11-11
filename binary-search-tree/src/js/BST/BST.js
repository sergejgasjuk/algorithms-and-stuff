import Node from "./Node";

/** Class BST(Binary Search Tree)  */
class BST {
  /**
   * Create a Binary Seacrh Tree.
   * @param {number} initialNodes - initial nodes
   */
  constructor(...initialNodes){
    this.root = null;
    
    if (initialNodes.length) {
      initialNodes.forEach((i) => this.insertNode(i));
    }
  }

  /**
   * Insert the new Node in Tree
   * @param {number} key - new Node key
   */
  insertNode(key) {
    let newKey = Math.ceil(parseInt(key, 10));
    
    // check if key is integer and not bigger then 100
    if (isNaN(newKey) || newKey > 100) {
      return false;
    }

    let newNode = new Node(newKey);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    let parent;
    
    // search for a place to insert new node
    while(true) {
      parent = current;
      
      // if key is smaller then current node - go left
      if(newKey < current.data){
        current = current.left;
        if(!current){
          parent.left = newNode;
          return this;
        }
      }
      // if key is larger then current node - go right
      else if (newKey > current.data) {
        current = current.right;
        if(!current) {
          parent.right = newNode;
          return this;
        }
      }
      // don't allow duplicates
      else {        
        return false;
      }
    }
  }

  /**
   * Delete the Node from Tree
   * @param {number} key - key of Node to be deleted
   */
  deleteNode(key) {
    let nodeToDelete = this.root;
    let parent = this.root;
    let isLeftChild;
    
    // Search for NodeToDelete in the Tree
    while(nodeToDelete.data !== key) {
      parent = nodeToDelete;     
      
      if (nodeToDelete.data > key) {
        nodeToDelete = nodeToDelete.left;
      } else {
        nodeToDelete = nodeToDelete.right;
      }

      if (!nodeToDelete) {
        return false;
      }
    }
    
    // Check if NodeToDelete is left child
    isLeftChild = nodeToDelete.data < parent.data;
    
    // Case if nodeToDelete has no children
    if (!nodeToDelete.left && !nodeToDelete.right) {
      if (nodeToDelete === this.root) {
        this.root = null;
      } else if (isLeftChild) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    }
    // Case if nodeToDelete has one child (Left)
    else if (!nodeToDelete.right) {
      if (nodeToDelete === this.root) {
        this.root = nodeToDelete.left;
      } else if (isLeftChild) {
        parent.left = nodeToDelete.left;
      } else {
        parent.right = nodeToDelete.left;
      }
    }
    // Case if nodeToDelete has one child (Right)
    else if (!nodeToDelete.left) {
      if (nodeToDelete === this.root) {
        this.root = nodeToDelete.right;
      } else if (isLeftChild) {
        parent.left = nodeToDelete.right;
      } else {
        parent.right = nodeToDelete.right;
      }
    }
    //Case if nodeToDelete has two children
    else if (nodeToDelete.left && nodeToDelete.right) {
      let successor = this._findSuccessor(nodeToDelete);

      if (nodeToDelete === this.root) {
        this.root = successor;
      } else if (isLeftChild) {
        parent.left = successor;
      } else {
        parent.right = successor;
      }
      
      successor.left = nodeToDelete.left;
    }
    
    this._display('Deleted Node: ', nodeToDelete.data);
    return this;
  }

  /**
   * Private Method.
   * Finds the successor of node to be deleted
   * @param {Node} node - node to be deleted
   */
  _findSuccessor(node) {
    let successor = null;
    let successorParent = null;
    let current = node.right;
    
    while(current) {
      successorParent = successor;
      successor = current;
      current = current.left;
    }
    
    if (successor !== node.right) {
      successorParent.left = successor.right;
      successor.right = node.right;
    }
    
    return successor;
  }
  
  /**
   * Finds the Node in the Tree
   * @param {number} key - key of Node to find
   */
  findNode(key) {
    let nodeToFind;
    
    if (isNaN(key)) {
      return false;
    }

    nodeToFind = this.root;
   
    while(nodeToFind) {
      if (nodeToFind.data === key) {
        this._display(nodeToFind);
        return nodeToFind;
      } else if (nodeToFind.data > key) {
        nodeToFind = nodeToFind.left;
      } else {
        nodeToFind = nodeToFind.right;
      }
    }    
    
    return false;
  }

  /**
   * Finds the Max Node in the Tree
   * @param {Node} node
   */
  findMaxNode(node = this.root) {
    let max = node;    

    if (!max) {
      return false;
    }
    
    while(max.right) {
      max = max.right;
    }
    
    this._display(max.data);
    return max;
  }

  /**
   * Finds the Min Node in the Tree
   * @param {Node} node
   */
  findMinNode(node = this.root) {
    let min = node;

    if (!min) {
      return false;
    }

    while(min.left) {
      min = min.left;
    }

    this._display(min.data);
    return min;
  }

  /**
   * Traverses Tree in-order way, prints nodes key
   */
  traversal() {
    this._display('Tree: ', this.root);
    
    return (function traverse(node, callback) {
      if (!node) {
        return false;
      }
      
      traverse(node.left, callback);
      callback(node.data);
      traverse(node.right, callback);
    })(this.root, this._display);
  }
  
  /**
   * Return height of the Tree
   */
  getHeight() {
    let height = (function depth(node){
      if (!node) {
        return 0;
      }
      
      return Math.max(depth(node.left), depth(node.right)) + 1;
    })(this.root);
    
    this._display('Tree height: ', height);
    return height;
  }
  
  _display(...args) {
    console.log(...args);
  }
}

export default BST;
