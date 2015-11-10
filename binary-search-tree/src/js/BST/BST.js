import Node from "./Node";

class BST {
  constructor(...initialNodes){
    this.root = null;
    
    if (initialNodes.length) {
      initialNodes.forEach((i) => this.insert(i));
    }
  }

  insert(key) {
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
    let parent = null;

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
        return;
      }
    }
  }
  
  search(key) {
    let current, parent;
    
    if (isNaN(key)) {
      return false;
    }

    current = this.root;
   
    while(current) {
      if (current.data === key) {
        return true;
      } else if (current.data > key) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    
    return false;
  }
  
  findMax() {
    let max = this.root;
    
    if (!max) {
      return false;
    }
    
    while(max.right) {
      max = max.right;
    }
    
    this.displayNode(max.data);
    return max;
  }
  
  findMin() {
    let min = this.root;

    if (!min) {
      return false;
    }

    while(min.left) {
      min = min.left;
    }

    this.displayNode(min.data);
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
    })(this.root, this.displayNode);
  }
  
  displayNode(val) {
    console.log(val);
  }
}

export default BST;
