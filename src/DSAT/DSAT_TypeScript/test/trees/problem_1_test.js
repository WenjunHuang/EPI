"use strict";
/// <reference path="../../node_modules/@types/jasmine/index.d.ts"/>
const problem_1_1 = require("../../src/trees/problem_1");
const common_data_1 = require("./common_data");
describe("FindMaxRecursive_Success", () => {
    const result = problem_1_1.FindMaxRecursive(common_data_1.SampleBTN, this.comparator);
    this.areIdentical(11, result);
});
//# sourceMappingURL=problem_1_test.js.map