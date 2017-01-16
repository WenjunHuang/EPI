"use strict";
const BinaryTreeAlgorithm_1 = require("../../src/trees/BinaryTreeAlgorithm");
const test = require("../../src/trees/BinaryTreeAlgorithm");
;
describe("findMaxRecursive_Success", () => {
    let result = BinaryTreeAlgorithm_1.FindMaxRecursive(root, this.comparator);
    this.areIdentical(11, result);
});
findMaxIterative_Success();
{
    let result = BinaryTreeAlgorithm_1.FindMaxIterative(root, this.comparator);
    this.areIdentical(11, result);
}
findMaxUsingLevelOrder_Success();
{
    let result = BinaryTreeAlgorithm_1.FindMaxUsingLevelOrder(root, this.comparator);
    this.areIdentical(11, result);
}
findRecursive_Success();
{
    let result = BinaryTreeAlgorithm_1.FindRecursive(root, 5, this.comparator);
    this.areNotIdentical(null, result);
    this.areIdentical(5, result.data);
}
findRecursive_NotFound_Success();
{
    let result = BinaryTreeAlgorithm_1.FindRecursive(root, 100, this.comparator);
    this.areIdentical(null, result);
}
findUsingLevelOrder_Success();
{
    let result = BinaryTreeAlgorithm_1.FindUsingLevelOrder(root, 10, this.comparator);
    this.areNotIdentical(null, result);
    this.areIdentical(10, result.data);
}
findUsingLevelOrder_NotFound_Success();
{
    let result = BinaryTreeAlgorithm_1.FindUsingLevelOrder(root, 100, this.comparator);
    this.areIdentical(null, result);
}
findSizeRecursive_Success();
{
    let result = BinaryTreeAlgorithm_1.FindSizeRecursive(root);
    this.areIdentical(11, result);
}
findSizeIterative_Success();
{
    let result = BinaryTreeAlgorithm_1.FindSizeIterative(root);
    this.areIdentical(11, result);
}
deepestNode_Success();
{
    let result = test.DeepestNode(root);
    this.areIdentical(11, result);
}
numberOfLeavesInBtUsingLevelOrder_Success();
{
    let result = test.numberOfLeavesInBTUsingLevelOrder(root);
    this.areIdentical(6, result);
}
//# sourceMappingURL=BinaryTreeAlgorithmTest.js.map