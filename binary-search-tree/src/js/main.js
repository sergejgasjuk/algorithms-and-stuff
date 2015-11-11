import BST from "./BST/BST";

var newTree = new BST(15, 6, 23);

newTree
  .insertNode(7)
  .insertNode(4)
  .insertNode(5)
  .insertNode(71)
  .insertNode(50)
  .deleteNode(15)
  .traversal();

newTree.getHeight();
