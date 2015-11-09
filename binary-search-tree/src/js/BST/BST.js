import Node from "./Node";

class BST {
  constructor(){
    this.root = null;
  }

  insert(data) {
    let inputData = Math.ceil(parseInt(data, 10));

    if (isNaN(inputData) || inputData > 100) {
      return false;
    }

    let newNode = new Node(inputData);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    let parent = null;

    while(true) {
      parent = current;

      if(inputData < current.data){
        current = current.left;
        if(!current){
          parent.left = newNode;
          return this;
        }
      } else if (inputData > current.data) {
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

  log() {
    console.log(this.root);
  }
}

export default BST;