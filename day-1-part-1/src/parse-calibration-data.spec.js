import assert from 'node:assert';
import { parseCalibrationData } from './parse-calibration-data.js';
import { loadTextFile } from './load-text-file.js';

const testData = loadTextFile('./day-1-part-1/example-input.txt');

describe('parseCalibrationData(data: string): number', () => {
	it('Should return the correct number with the example data', () => {
		assert.strictEqual(142, parseCalibrationData(testData));
	});
});
