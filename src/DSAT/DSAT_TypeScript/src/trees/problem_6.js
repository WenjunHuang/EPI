"use strict";
// find an algorithm for finding the size of binary tree
function FindSizeRecursive(root) {
    if (!root)
        return 0;
    return FindSizeRecursive(root.left) + FindSizeRecursive(root.right) + 1;
}
exports.FindSizeRecursive = FindSizeRecursive;
//# sourceMappingURL=problem_6.js.map