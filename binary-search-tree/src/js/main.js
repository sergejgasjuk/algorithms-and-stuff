import BST from "./BST/BST";

var newTree = new BST(19,25,22, 17, 10, 7, 16);

//newTree
//  .insert(20)
//  .insert(12)
//  .insert(35)
//  .insert(7);

newTree.deleteNode(10);
newTree.deleteNode(19);
newTree.traversal();
