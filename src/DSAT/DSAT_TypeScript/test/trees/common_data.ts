import {BinaryTreeNode} from "../../src/trees/BinaryTreeNode";

export let SampleBTN = new BinaryTreeNode<number>(1,
    new BinaryTreeNode<number>(2,
        new BinaryTreeNode<number>(4,
            new BinaryTreeNode<number>(8),
            new BinaryTreeNode<number>(9)),
        new BinaryTreeNode<number>(5,
            new BinaryTreeNode<number>(10),
            new BinaryTreeNode<number>(11))),
    new BinaryTreeNode<number>(3,
        new BinaryTreeNode<number>(6),
        new BinaryTreeNode<number>(7)));

export let comparator = (left: number, right: number): number => {
    if (left > right) return 1;
    else if (left === right) return 0;
    else return -1;
}