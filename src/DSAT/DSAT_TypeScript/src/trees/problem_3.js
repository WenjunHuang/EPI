"use strict";
function FindRecursive(root, value, comparator) {
    if (!root)
        return null;
    if (comparator(root.data, value) === 0)
        return root;
    let result = FindRecursive(root.left, value, comparator);
    if (result)
        return result;
    return FindRecursive(root.right, value, comparator);
}
exports.FindRecursive = FindRecursive;
//# sourceMappingURL=problem_3.js.map