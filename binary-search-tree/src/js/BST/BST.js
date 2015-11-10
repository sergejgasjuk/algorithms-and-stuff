import Node from "./Node";

class BST {
  constructor(...initialNodes){
    this.root = null;
    
    if (initialNodes.length) {
      initialNodes.forEach((i) => this.insertNode(i));
    }
  }

  insertNode(key) {
    let newKey = Math.ceil(parseInt(key, 10));

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

    while(true) {
      parent = current;

      if(newKey < current.data){
        current = current.left;
        if(!current){
          parent.left = newNode;
          return this;
        }
      } else if (newKey > current.data) {
        current = current.right;
        if(!current) {
          parent.right = newNode;
          return this;
        }
      } else {
        return false;
      }
    }
  }
  
  deleteNode(key) {
    // TODO: edit and finish
    let current = this.root;
    let parent = this.root;
    let isLeftChild = false;

    while(current.data !== key) {
      parent = current;     
      
      if (current.data > key) {
        isLeftChild = true;
        current = current.left;
      } else {
        isLeftChild = false;
        current = current.right;
      }

      if (!current) {
        console.log("not found");
        console.log(this.root);
        return false;
      }
    }

    //Case 1: if node to be deleted has no children
    if (!current.left && !current.right) {
      if (current === this.root) {
        this.root = null;
        //return;
      }      
      if (isLeftChild) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    }
    //Case 2 : if node to be deleted has only one child
    else if (!current.right) {
      if (current === this.root) {
        this.root = current.left;
        //return;
      } else if (isLeftChild) {
        parent.left = current.left;
      } else {
        parent.right = current.left;
      }
    }
    else if (!current.left) {
      if (current === this.root) {
        this.root = current.right;
        //return;
      } else if (isLeftChild) {
        parent.left = current.right;
      } else {
        parent.right = current.right;
      }
    }
    //Case 3 : if node to be deleted has two children
    else if (current.left && current.right) {
      let successor = this._findSuccessor(current);

      if (current === this.root) {
        this.root = successor;
      } else if (isLeftChild) {
        parent.left = successor;
      } else {
        parent.right = successor;
      }
      successor.left = current.left;
    }

    console.log(this.root);
    return true;
  }
  
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
  
  findNode(key) {
    let current;
    
    if (isNaN(key)) {
      return false;
    }

    current = this.root;
   
    while(current) {
      if (current.data === key) {
        return current;
      } else if (current.data > key) {
        current = current.left;
      } else {
        current = current.right;
      }
    }    
    
    return false;
  }
  
  findMaxNode(node = this.root) {
    let max = node;    

    if (!max) {
      return false;
    }
    
    while(max.right) {
      max = max.right;
    }
    
    this._displayNode(max.data);
    return max;
  }
  
  findMinNode(node = this.root) {
    let min = node;

    if (!min) {
      return false;
    }

    while(min.left) {
      min = min.left;
    }

    this._displayNode(min.data);
    return min;
  }
  
  traversal() {
    return (function traverse(node, callback) {
      if (!node) {
        return false;
      }
      
      traverse(node.left, callback);
      callback(node.data);
      traverse(node.right, callback);
    })(this.root, this._displayNode);
  }
  
  _displayNode(node) {
    console.log(node);
  }
}

export default BST;
