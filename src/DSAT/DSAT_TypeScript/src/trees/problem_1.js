"use strict";
function FindMaxRecursive(root, comparator) {
    let max = root.data;
    if (root.left) {
        let left = FindMaxRecursive(root.left, comparator);
        if (comparator(left, max) > 0)
            max = left;
    }
    if (root.right) {
        let right = FindMaxRecursive(root.right, comparator);
        if (comparator(right, max) > 0)
            max = right;
    }
    return max;
}
exports.FindMaxRecursive = FindMaxRecursive;
//# sourceMappingURL=problem_1.js.map