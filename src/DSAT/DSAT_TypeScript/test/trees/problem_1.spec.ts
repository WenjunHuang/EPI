/// <reference path="../../node_modules/@types/jasmine/index.d.ts"/>
import {FindMaxRecursive} from "../../src/trees/problem_1";
import {SampleBTN, comparator} from "./common_data";

describe("FindMaxRecursive_Success",
    () => {
        const result = FindMaxRecursive(SampleBTN, comparator);
        it("value match",
            () => {
                expect(result).toBe(11);
            });
    });