/* BinarySearchTree */
import  BinarySearchTree from './util/BinarySearchTree.js';

window.onload = () => {
  
  const bst = new BinarySearchTree();
    bst.add(8);
    bst.add(3);
    bst.add(14);
    bst.add(1);
    bst.add(6);
    bst.add(4);
    bst.add(7);

    console.log(bst.findMinHeight());
    console.log(bst.findMaxHeight());
    console.log(bst.isBalanced());
    bst.remove(6);

    console.log('inOrder: ' + bst.inOrder());
    console.log('preOrder: ' + bst.preOrder());
    console.log('postOrder: ' + bst.postOrder());

    console.log('levelOrder: ' + bst.levelOrder());

};