import BST from "./BST/BST";

var newTree = new BST(10, 18, 17);

//newTree
//  .insert(20)
//  .insert(12)
//  .insert(35)
//  .insert(7);

//newTree.traversal();
//newTree.search(13);
newTree.delete(18);
newTree.traversal();
