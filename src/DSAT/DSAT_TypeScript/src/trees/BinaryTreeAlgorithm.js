"use strict";
function FindMaxUsingLevelOrder(root, comparator) {
    let queue = [];
    queue.enqueue(root);
    let max = root.data;
    while (queue.length > 0) {
        let item = queue.dequeue();
        if (comparator(item.data, max) > 0)
            max = item.data;
        if (item.left)
            queue.push(item.left);
        if (item.right)
            queue.push(item.right);
    }
    return max;
}
exports.FindMaxUsingLevelOrder = FindMaxUsingLevelOrder;
function DeepestNode(root) {
    if (!root)
        return null;
    let queue = [];
    queue.enqueue(root);
    let node;
    while (queue.length > 0) {
        node = queue.dequeue();
        if (node.left)
            queue.enqueue(node.left);
        if (node.right)
            queue.enqueue(node.right);
    }
    return node.data;
}
exports.DeepestNode = DeepestNode;
//Problem-14
function numberOfLeavesInBTUsingLevelOrder(root) {
    if (!root)
        return 0;
    let queue = [];
    queue.enqueue(root);
    let count = 0;
    while (queue.length > 0) {
        let node = queue.dequeue();
        if (!node.left && !node.right)
            ++count;
        if (node.left)
            queue.enqueue(node.left);
        if (node.right)
            queue.enqueue(node.right);
    }
    return count;
}
exports.numberOfLeavesInBTUsingLevelOrder = numberOfLeavesInBTUsingLevelOrder;
//# sourceMappingURL=BinaryTreeAlgorithm.js.map