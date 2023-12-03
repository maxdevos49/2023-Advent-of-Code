import assert from 'node:assert';
import { loadTextFile } from '../../day-1-part-1/src/load-text-file.js';
import { parsePartNumbers2 } from './parse-part-numbers-2.js';

const exampleData = loadTextFile('./day-3-part-2/example-input.txt');
const partNumbers = parsePartNumbers2(exampleData);

describe('parsePartNumbers2(data: string): PartNumber[]', () => {
	describe('Number 1', () => {
		const expectedNumber = '467';
		const expectedStartIndex = 0;
		const expectedValid = true;

		const expectedSymbolCount = 1;
		const expectedSymbolChar = '*';
		const expectedSymbolX = 3;
		const expectedSymbolY = 1;

		const number = partNumbers[0];

		it('Should parse the correct number', () =>
			assert.strictEqual(number.number, expectedNumber));
		it('Should parse the correct start index', () =>
			assert.strictEqual(number.startIndex, expectedStartIndex));
		it('Should parse the correct validity', () =>
			assert.strictEqual(number.valid, expectedValid));

		const symbol = partNumbers[0].symbols[0];

		it('Should parse the correct number of part number symbols', () =>
			assert.strictEqual(number.symbols.length, expectedSymbolCount));
		it('Should parse the correct symbol character', () =>
			assert.strictEqual(symbol.char, expectedSymbolChar));
		it('Should parse the correct symbol x column position', () =>
			assert.strictEqual(symbol.x, expectedSymbolX));
		it('Should parse the correct symbol y column position', () =>
			assert.strictEqual(symbol.y, expectedSymbolY));
	});

	describe('Number 2', () => {
		const expectedNumber = '114';
		const expectedStartIndex = 5;
		const expectedValid = false;

		const expectedSymbolCount = 0;

		const number = partNumbers[1];

		it('Should parse the correct number', () =>
			assert.strictEqual(number.number, expectedNumber));
		it('Should parse the correct start index', () =>
			assert.strictEqual(number.startIndex, expectedStartIndex));
		it('Should parse the correct validity', () =>
			assert.strictEqual(number.valid, expectedValid));

		it('Should parse the correct number of part number symbols', () =>
			assert.strictEqual(number.symbols.length, expectedSymbolCount));
	});

	describe('Number 3', () => {
		const expectedStartIndex = 24;
		const expectedNumber = '35';
		const expectedValid = true;

		const expectedSymbolCount = 1;
		const expectedSymbolChar = '*';
		const expectedSymbolX = 3;
		const expectedSymbolY = 1;

		const number = partNumbers[2];

		it('Should parse the correct number', () =>
			assert.strictEqual(number.number, expectedNumber));
		it('Should parse the correct start index', () =>
			assert.strictEqual(number.startIndex, expectedStartIndex));
		it('Should parse the correct validity', () =>
			assert.strictEqual(number.valid, expectedValid));

		const symbol = partNumbers[2].symbols[0];

		it('Should parse the correct number of part number symbols', () =>
			assert.strictEqual(number.symbols.length, expectedSymbolCount));
		it('Should parse the correct symbol character', () =>
			assert.strictEqual(symbol.char, expectedSymbolChar));
		it('Should parse the correct symbol x column position', () =>
			assert.strictEqual(symbol.x, expectedSymbolX));
		it('Should parse the correct symbol y column position', () =>
			assert.strictEqual(symbol.y, expectedSymbolY));
	});

	describe('Number 4', () => {
		const expectedStartIndex = 28;
		const expectedNumber = '633';
		const expectedValid = true;

		const expectedSymbolCount = 1;
		const expectedSymbolChar = '#';
		const expectedSymbolX = 6;
		const expectedSymbolY = 3;

		const number = partNumbers[3];

		it('Should parse the correct number', () =>
			assert.strictEqual(number.number, expectedNumber));
		it('Should parse the correct start index', () =>
			assert.strictEqual(number.startIndex, expectedStartIndex));
		it('Should parse the correct validity', () =>
			assert.strictEqual(number.valid, expectedValid));

		const symbol = partNumbers[3].symbols[0];

		it('Should parse the correct number of part number symbols', () =>
			assert.strictEqual(number.symbols.length, expectedSymbolCount));
		it('Should parse the correct symbol character', () =>
			assert.strictEqual(symbol.char, expectedSymbolChar));
		it('Should parse the correct symbol x column position', () =>
			assert.strictEqual(symbol.x, expectedSymbolX));
		it('Should parse the correct symbol y column position', () =>
			assert.strictEqual(symbol.y, expectedSymbolY));
	});

	describe('Number 5', () => {
		const expectedStartIndex = 44;
		const expectedNumber = '617';
		const expectedValid = true;

		const expectedSymbolCount = 1;
		const expectedSymbolChar = '*';
		const expectedSymbolX = 3;
		const expectedSymbolY = 4;

		const number = partNumbers[4];

		it('Should parse the correct number', () =>
			assert.strictEqual(number.number, expectedNumber));
		it('Should parse the correct start index', () =>
			assert.strictEqual(number.startIndex, expectedStartIndex));
		it('Should parse the correct validity', () =>
			assert.strictEqual(number.valid, expectedValid));

		const symbol = partNumbers[4].symbols[0];

		it('Should parse the correct number of part number symbols', () =>
			assert.strictEqual(number.symbols.length, expectedSymbolCount));
		it('Should parse the correct symbol character', () =>
			assert.strictEqual(symbol.char, expectedSymbolChar));
		it('Should parse the correct symbol x column position', () =>
			assert.strictEqual(symbol.x, expectedSymbolX));
		it('Should parse the correct symbol y column position', () =>
			assert.strictEqual(symbol.y, expectedSymbolY));
	});

	describe('Number 6', () => {
		const expectedStartIndex = 62;
		const expectedNumber = '58';
		const expectedValid = false;

		const expectedSymbolCount = 0;

		const number = partNumbers[5];

		it('Should parse the correct number', () =>
			assert.strictEqual(number.number, expectedNumber));
		it('Should parse the correct start index', () =>
			assert.strictEqual(number.startIndex, expectedStartIndex));
		it('Should parse the correct validity', () =>
			assert.strictEqual(number.valid, expectedValid));

		it('Should parse the correct number of part number symbols', () =>
			assert.strictEqual(number.symbols.length, expectedSymbolCount));
	});

	describe('Number 7', () => {
		const expectedStartIndex = 68;
		const expectedNumber = '592';
		const expectedValid = true;

		const expectedSymbolCount = 1;
		const expectedSymbolChar = '+';
		const expectedSymbolX = 5;
		const expectedSymbolY = 5;

		const number = partNumbers[6];

		it('Should parse the correct number', () =>
			assert.strictEqual(number.number, expectedNumber));
		it('Should parse the correct start index', () =>
			assert.strictEqual(number.startIndex, expectedStartIndex));
		it('Should parse the correct validity', () =>
			assert.strictEqual(number.valid, expectedValid));

		const symbol = partNumbers[6].symbols[0];

		it('Should parse the correct number of part number symbols', () =>
			assert.strictEqual(number.symbols.length, expectedSymbolCount));
		it('Should parse the correct symbol character', () =>
			assert.strictEqual(symbol.char, expectedSymbolChar));
		it('Should parse the correct symbol x column position', () =>
			assert.strictEqual(symbol.x, expectedSymbolX));
		it('Should parse the correct symbol y column position', () =>
			assert.strictEqual(symbol.y, expectedSymbolY));
	});

	describe('Number 8', () => {
		const expectedStartIndex = 83;
		const expectedNumber = '755';
		const expectedValid = true;

		const expectedSymbolCount = 1;
		const expectedSymbolChar = '*';
		const expectedSymbolX = 5;
		const expectedSymbolY = 8;

		const number = partNumbers[7];

		it('Should parse the correct number', () =>
			assert.strictEqual(number.number, expectedNumber));
		it('Should parse the correct start index', () =>
			assert.strictEqual(number.startIndex, expectedStartIndex));
		it('Should parse the correct validity', () =>
			assert.strictEqual(number.valid, expectedValid));

		const symbol = partNumbers[7].symbols[0];

		it('Should parse the correct number of part number symbols', () =>
			assert.strictEqual(number.symbols.length, expectedSymbolCount));
		it('Should parse the correct symbol character', () =>
			assert.strictEqual(symbol.char, expectedSymbolChar));
		it('Should parse the correct symbol x column position', () =>
			assert.strictEqual(symbol.x, expectedSymbolX));
		it('Should parse the correct symbol y column position', () =>
			assert.strictEqual(symbol.y, expectedSymbolY));
	});

	describe('Number 9', () => {
		const expectedStartIndex = 100;
		const expectedNumber = '664';
		const expectedValid = true;

		const expectedSymbolCount = 1;
		const expectedSymbolChar = '$';
		const expectedSymbolX = 3;
		const expectedSymbolY = 8;

		const number = partNumbers[8];

		it('Should parse the correct number', () =>
			assert.strictEqual(number.number, expectedNumber));
		it('Should parse the correct start index', () =>
			assert.strictEqual(number.startIndex, expectedStartIndex));
		it('Should parse the correct validity', () =>
			assert.strictEqual(number.valid, expectedValid));

		const symbol = partNumbers[8].symbols[0];

		it('Should parse the correct number of part number symbols', () =>
			assert.strictEqual(number.symbols.length, expectedSymbolCount));
		it('Should parse the correct symbol character', () =>
			assert.strictEqual(symbol.char, expectedSymbolChar));
		it('Should parse the correct symbol x column position', () =>
			assert.strictEqual(symbol.x, expectedSymbolX));
		it('Should parse the correct symbol y column position', () =>
			assert.strictEqual(symbol.y, expectedSymbolY));
	});

	describe('Number 10', () => {
		const expectedStartIndex = 104;
		const expectedNumber = '598';
		const expectedValid = true;

		const expectedSymbolCount = 1;
		const expectedSymbolChar = '*';
		const expectedSymbolX = 5;
		const expectedSymbolY = 8;

		const number = partNumbers[9];

		it('Should parse the correct number', () =>
			assert.strictEqual(number.number, expectedNumber));
		it('Should parse the correct start index', () =>
			assert.strictEqual(number.startIndex, expectedStartIndex));
		it('Should parse the correct validity', () =>
			assert.strictEqual(number.valid, expectedValid));

		const symbol = partNumbers[9].symbols[0];

		it('Should parse the correct number of part number symbols', () =>
			assert.strictEqual(number.symbols.length, expectedSymbolCount));
		it('Should parse the correct symbol character', () =>
			assert.strictEqual(symbol.char, expectedSymbolChar));
		it('Should parse the correct symbol x column position', () =>
			assert.strictEqual(symbol.x, expectedSymbolX));
		it('Should parse the correct symbol y column position', () =>
			assert.strictEqual(symbol.y, expectedSymbolY));
	});
});
