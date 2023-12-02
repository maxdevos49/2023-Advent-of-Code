import assert from 'node:assert';
import { isNumber } from './is-number.js';

describe("isNumber(char: string): boolean", () => {
    it("Should return true for numeric characters", () => {
        assert(isNumber("0"));
        assert(isNumber("1"));
        assert(isNumber("2"));
        assert(isNumber("3"));
        assert(isNumber("4"));
        assert(isNumber("5"));
        assert(isNumber("6"));
        assert(isNumber("7"));
        assert(isNumber("8"));
        assert(isNumber("9"));
    });

    it("Should return false for alpha characters", () => {
        assert(!isNumber("a"));
        assert(!isNumber("A"));
        assert(!isNumber("b"));
        assert(!isNumber("B"));
        assert(!isNumber("c"));
        assert(!isNumber("C"));
        assert(!isNumber("y"));
        assert(!isNumber("Y"));
        assert(!isNumber("z"));
        assert(!isNumber("Z"));
    });

    it("Should return false for special characters", () => {
        assert(!isNumber("."));
        assert(!isNumber(","));
        assert(!isNumber("?"));
        assert(!isNumber("!"));
        assert(!isNumber("#"));
        assert(!isNumber("@"));
    });
})
