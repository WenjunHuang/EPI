"use strict";
// Give an algorithm for finding the size of binary tree without recursion
function FindSizeIterative(root) {
    if (!root)
        return 0;
    let result = 0;
    let queue = [];
    queue.enqueue(root);
    while (queue.length > 0) {
        let node = queue.dequeue();
        result += 1;
        if (node.left)
            queue.enqueue(node.left);
        if (node.right)
            queue.enqueue(node.right);
    }
    return result;
}
exports.FindSizeIterative = FindSizeIterative;
//# sourceMappingURL=problem_7.js.map