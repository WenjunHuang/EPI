"use strict";
function numberOfFullNodesInBtUsingLevelOrder(root) {
    if (!root)
        return 0;
    let queue = [];
    let count = 0;
    queue.enqueue(root);
    while (queue.length > 0) {
        let node = queue.dequeue();
        if (node.left && node.right)
            ++count;
        if (node.left)
            queue.enqueue(node.left);
        if (node.right)
            queue.enqueue(node.right);
    }
    return count;
}
exports.numberOfFullNodesInBtUsingLevelOrder = numberOfFullNodesInBtUsingLevelOrder;
//# sourceMappingURL=problem_15.js.map