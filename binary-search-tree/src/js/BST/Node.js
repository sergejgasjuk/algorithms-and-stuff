/** Class Node  */
class Node {
  /**
   * Binary Search Tree Node.
   * @param {number} key - key-identification of Node
   */
  constructor(key = null) {
    this.data = key;
    this.left = null;
    this.right = null;
  }
}

export default Node;
