"use strict";
/// <reference path="../node_modules/@types/jasmine/index.d.ts"/>
var problem_5_8_1 = require("../src/problem_5_8");
describe("Test for ReverseDigits", function () {
    it("success with positive values", function () {
        // arrange
        var input1 = 37195;
        var expect1 = 59173;
        expect(problem_5_8_1.ReverseDigits(input1)).toBe(expect1);
    });
    it("success with negative value", function () {
        //arragne
        var input1 = -325235;
        var expect1 = -532523;
        expect(problem_5_8_1.ReverseDigits(input1)).toBe(expect1);
    });
});
//# sourceMappingURL=problem_5_8.spec.js.map