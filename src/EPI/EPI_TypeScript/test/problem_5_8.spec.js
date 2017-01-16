"use strict";
/// <reference path="../node_modules/@types/jasmine/index.d.ts"/>
const problem_5_8_1 = require("../src/problem_5_8");
describe("Test for ReverseDigits", () => {
    it("success with positive values", () => {
        // arrange
        const input1 = 37195;
        const expect1 = 59173;
        expect(problem_5_8_1.ReverseDigits(input1)).toBe(expect1);
    });
    it("success with negative value", () => {
        //arragne
        const input1 = -325235;
        const expect1 = -532523;
        expect(problem_5_8_1.ReverseDigits(input1)).toBe(expect1);
    });
});
//# sourceMappingURL=problem_5_8.spec.js.map