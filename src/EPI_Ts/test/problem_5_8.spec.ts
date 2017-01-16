/// <reference path="../node_modules/@types/jasmine/index.d.ts"/>
import { ReverseDigits } from "../src/problem_5_8";

describe("Test for ReverseDigits",
    () => {

        it("success with positive values",
            () => {
                // arrange
                const input1 = 37195;
                const expect1 = 59173;

                expect(ReverseDigits(input1)).toBe(expect1);
            });

        it("success with negative value",
            () => {
                //arragne
                const input1 = -325235;
                const expect1 = -532523;

                 expect(ReverseDigits(input1)).toBe(expect1);
            });
    });