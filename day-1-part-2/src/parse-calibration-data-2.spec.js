import assert from "node:assert";
import { parseCalibrationData2 } from './parse-calibration-data-2.js';
import { loadTextFile } from '../../day-1-part-1/src/load-text-file.js';

const testData = loadTextFile("./day-1-part-2/example-input.txt");

describe("parseCalibrationData2(data: string): number", () => {
    it("Should return the correct calibration sum for the example test data", () => {
        assert.strictEqual(281, parseCalibrationData2(testData));
    });
})