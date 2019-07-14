# Binary Search Tree
CS concepts showing the implimtaion of Binary Search Tree in javascript.

A Binary Search Tree data structure is one that very much would look like a tree in nature.  It starts with a root element.  As additional nodes are added, if the node is less than the parent node it would be added to the left side of the parent.  If it is greater than the parent then it would be added to the left side of the parent.  Each node will only have two child nodes.
      		 
  ![Screen Shot 2019-07-14 at 1 10 01 PM](https://user-images.githubusercontent.com/11912649/61187573-b796bf00-a638-11e9-879e-ffb8dc203361.png)  

Images sourced from:

https://www.youtube.com/watch?v=5cU1ILGy6dM

https://medium.com/employbl/depth-first-and-breadth-first-search-on-trees-in-javascript-58dcd6ff8de1

https://tchol.org/explore/transparent-structures-of-the-eye.html

                 
 
This allows use to efficiently scan through the tree to find a particular node. In each check can roughly eliminating about half the remaining nodes until we find the node we are looking for.  
 
The BigO for a binary search tree `O(log n)` on average and is `O(n)` in the worst case scenario.
