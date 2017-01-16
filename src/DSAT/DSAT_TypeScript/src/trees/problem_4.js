"use strict";
function FindUsingLevelOrder(root, value, comparator) {
    const queue = [];
    queue.enqueue(root);
    while (queue.length > 0) {
        let first = queue.dequeue();
        if (comparator(first.data, value) === 0)
            return first;
        if (first.left)
            queue.push(first.left);
        if (first.right)
            queue.push(first.right);
    }
    // not found
    return null;
}
exports.FindUsingLevelOrder = FindUsingLevelOrder;
//# sourceMappingURL=problem_4.js.map