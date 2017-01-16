/// <reference path="../../node_modules/@types/jasmine/index.d.ts"/>
import { BinaryTreeNode } from "../../src/trees/BinaryTreeNode";
import { FindMaxRecursive, FindMaxIterative, FindMaxUsingLevelOrder, FindRecursive, FindUsingLevelOrder,
    FindSizeRecursive, FindSizeIterative } from "../../src/trees/BinaryTreeAlgorithm";
import * as test from "../../src/trees/BinaryTreeAlgorithm";
;

describe("findMaxRecursive_Success",
    () => {

        let result = FindMaxRecursive(root, this.comparator);
        this.areIdentical(11, result);
    });

findMaxIterative_Success()
{
    let result = FindMaxIterative(root, this.comparator);
    this.areIdentical(11, result);
}

findMaxUsingLevelOrder_Success()
{

    let result = FindMaxUsingLevelOrder(root, this.comparator);
    this.areIdentical(11, result);
}

findRecursive_Success()
{
    let result = FindRecursive(root, 5, this.comparator);
    this.areNotIdentical(null, result);
    this.areIdentical(5, result.data);
}

findRecursive_NotFound_Success()
{
    let result = FindRecursive(root, 100, this.comparator);
    this.areIdentical(null, result);
}

findUsingLevelOrder_Success()
{
    let result = FindUsingLevelOrder(root, 10, this.comparator);
    this.areNotIdentical(null, result);
    this.areIdentical(10, result.data);
}

findUsingLevelOrder_NotFound_Success()
{
    let result = FindUsingLevelOrder(root, 100, this.comparator);
    this.areIdentical(null, result);
}

findSizeRecursive_Success()
{
    let result = FindSizeRecursive(root);
    this.areIdentical(11, result);
}

findSizeIterative_Success()
{
    let result = FindSizeIterative(root);
    this.areIdentical(11, result);
}

deepestNode_Success()
{
    let result = test.DeepestNode(root);
    this.areIdentical(11, result);
}

numberOfLeavesInBtUsingLevelOrder_Success()
{
    let result = test.numberOfLeavesInBTUsingLevelOrder(root);
    this.areIdentical(6, result);
}
}