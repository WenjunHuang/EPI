"use strict";
/*
 give an algorithm for printing the level order data in reverse order. for example,
            1
          2   3
        4  5 6  7
   be: 4 5 6 7 2 3 1
*/
function LevelOrderTraversalInReverse(root, traverser) {
    if (!root)
        return;
    let stack = [];
    let queue = [];
    queue.enqueue(root);
    while (queue.length > 0) {
        let node = queue.dequeue();
        stack.push(node);
        if (node.right)
            queue.enqueue(node.right);
        if (node.left)
            queue.enqueue(node.left);
    }
    while (stack.length > 0) {
        let node = stack.pop();
        traverser(node.data);
    }
}
exports.LevelOrderTraversalInReverse = LevelOrderTraversalInReverse;
//# sourceMappingURL=problem_8.js.map