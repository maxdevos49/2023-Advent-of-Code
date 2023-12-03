import assert from 'node:assert';
import { loadTextFile } from '../../day-1-part-1/src/load-text-file.js';
import { parsePartNumbers } from './parse-part-numbers.js';

const exampleData = loadTextFile('./day-3-part-1/example-input.txt');
const partNumbers = parsePartNumbers(exampleData);

describe('parsePartNumbers(data: string): PartNumber[]', () => {
	describe('Number 1', () => {
		const expectedNumber = '467';
		const expectedStartIndex = 0;
		const expectedValid = true;

		const number = partNumbers[0];

		it('Should parse the correct number', () =>
			assert.strictEqual(number.number, expectedNumber));
		it('Should parse the correct start index', () =>
			assert.strictEqual(number.startIndex, expectedStartIndex));
		it('Should parse the correct validity', () =>
			assert.strictEqual(number.valid, expectedValid));
	});

	describe('Number 2', () => {
		const expectedNumber = '114';
		const expectedStartIndex = 5;
		const expectedValid = false;

		const number = partNumbers[1];

		it('Should parse the correct number', () =>
			assert.strictEqual(number.number, expectedNumber));
		it('Should parse the correct start index', () =>
			assert.strictEqual(number.startIndex, expectedStartIndex));
		it('Should parse the correct validity', () =>
			assert.strictEqual(number.valid, expectedValid));
	});

	describe('Number 3', () => {
		const expectedStartIndex = 24;
		const expectedNumber = '35';
		const expectedValid = true;

		const number = partNumbers[2];

		it('Should parse the correct number', () =>
			assert.strictEqual(number.number, expectedNumber));
		it('Should parse the correct start index', () =>
			assert.strictEqual(number.startIndex, expectedStartIndex));
		it('Should parse the correct validity', () =>
			assert.strictEqual(number.valid, expectedValid));
	});

	describe('Number 4', () => {
		const expectedStartIndex = 28;
		const expectedNumber = '633';
		const expectedValid = true;

		const number = partNumbers[3];

		it('Should parse the correct number', () =>
			assert.strictEqual(number.number, expectedNumber));
		it('Should parse the correct start index', () =>
			assert.strictEqual(number.startIndex, expectedStartIndex));
		it('Should parse the correct validity', () =>
			assert.strictEqual(number.valid, expectedValid));
	});

	describe('Number 5', () => {
		const expectedStartIndex = 44;
		const expectedNumber = '617';
		const expectedValid = true;

		const number = partNumbers[4];

		it('Should parse the correct number', () =>
			assert.strictEqual(number.number, expectedNumber));
		it('Should parse the correct start index', () =>
			assert.strictEqual(number.startIndex, expectedStartIndex));
		it('Should parse the correct validity', () =>
			assert.strictEqual(number.valid, expectedValid));
	});

	describe('Number 6', () => {
		const expectedStartIndex = 62;
		const expectedNumber = '58';
		const expectedValid = false;

		const number = partNumbers[5];

		it('Should parse the correct number', () =>
			assert.strictEqual(number.number, expectedNumber));
		it('Should parse the correct start index', () =>
			assert.strictEqual(number.startIndex, expectedStartIndex));
		it('Should parse the correct validity', () =>
			assert.strictEqual(number.valid, expectedValid));
	});

	describe('Number 7', () => {
		const expectedStartIndex = 68;
		const expectedNumber = '592';
		const expectedValid = true;

		const number = partNumbers[6];

		it('Should parse the correct number', () =>
			assert.strictEqual(number.number, expectedNumber));
		it('Should parse the correct start index', () =>
			assert.strictEqual(number.startIndex, expectedStartIndex));
		it('Should parse the correct validity', () =>
			assert.strictEqual(number.valid, expectedValid));
	});

	describe('Number 8', () => {
		const expectedStartIndex = 83;
		const expectedNumber = '755';
		const expectedValid = true;

		const number = partNumbers[7];

		it('Should parse the correct number', () =>
			assert.strictEqual(number.number, expectedNumber));
		it('Should parse the correct start index', () =>
			assert.strictEqual(number.startIndex, expectedStartIndex));
		it('Should parse the correct validity', () =>
			assert.strictEqual(number.valid, expectedValid));
	});

	describe('Number 9', () => {
		const expectedStartIndex = 100;
		const expectedNumber = '664';
		const expectedValid = true;

		const number = partNumbers[8];

		it('Should parse the correct number', () =>
			assert.strictEqual(number.number, expectedNumber));
		it('Should parse the correct start index', () =>
			assert.strictEqual(number.startIndex, expectedStartIndex));
		it('Should parse the correct validity', () =>
			assert.strictEqual(number.valid, expectedValid));
	});

	describe('Number 10', () => {
		const expectedStartIndex = 104;
		const expectedNumber = '598';
		const expectedValid = true;

		const number = partNumbers[9];

		it('Should parse the correct number', () =>
			assert.strictEqual(number.number, expectedNumber));
		it('Should parse the correct start index', () =>
			assert.strictEqual(number.startIndex, expectedStartIndex));
		it('Should parse the correct validity', () =>
			assert.strictEqual(number.valid, expectedValid));
	});
});
