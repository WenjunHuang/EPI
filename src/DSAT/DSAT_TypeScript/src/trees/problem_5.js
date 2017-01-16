"use strict";
const BinaryTreeNode_1 = require("./BinaryTreeNode");
function InsertUsingLevelOrder(root, data) {
    let newNode = new BinaryTreeNode_1.BinaryTreeNode(data);
    if (!root) {
        root = newNode;
        return root;
    }
    let queue = [];
    queue.enqueue(root);
    while (queue.length > 0) {
        let node = queue.dequeue();
        if (node.left)
            queue.enqueue(node.left);
        else {
            node.left = newNode;
            return root;
        }
        if (node.right)
            queue.enqueue(node.right);
        else {
            node.right = newNode;
            return root;
        }
    }
}
exports.InsertUsingLevelOrder = InsertUsingLevelOrder;
//# sourceMappingURL=problem_5.js.map