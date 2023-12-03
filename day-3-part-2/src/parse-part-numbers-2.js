import { isNumber } from '../../day-1-part-1/src/is-number.js';

/**
 * @typedef {Object} PartSymbol
 * @property {string} char Symbol character
 * @property {number} x Symbol x column position in data
 * @property {number} y Symbol y column position in data
 */

/**
 * @typedef {Object} PartNumber
 * @property {string} number
 * @property {number} startIndex
 * @property {boolean} valid
 * @property {PartSymbol[]} symbols
 */

/**
 * Parses part numbers out of text data.
 *
 * @param {string} data The part number data
 * @returns {PartNumber[]} An array of parsed numbers
 */
function parsePartNumbers2(data) {
	/** @type {PartNumber[]} */
	const partNumbers = [];

	// Plus 1 for the new line character that we removed with the split!
	const lineWidth = data.split('\n')[0].length + 1;
	const lineCount = data.split('\n').length;

	let index = -1;
	while (index++ < data.length) {
		const currentChar = data[index];
		if (!isNumber(currentChar) || currentChar === '\n') {
			continue;
		}

		let numString = currentChar;

		const startIndex = index;

		while (isNumber(data[++index])) {
			numString += data[index];
		}

		/** @type {PartSymbol[]} */
		const symbols = [];
		let valid = false;

		for (let y = -1; y <= 1; y++) {
			for (let x = -1; x <= numString.length; x++) {
				const lineX = (startIndex + x) % lineWidth;
				const lineY = Math.trunc(startIndex / lineWidth) + y;

				if (
					lineY < 0 ||
					lineY > lineCount ||
					lineX < 0 ||
					lineX > lineWidth
				) {
					continue;
				}

				const searchChar = data[lineY * lineWidth + lineX];

				// Conditions for not being a part number indicator
				if (
					!searchChar ||
					isNumber(searchChar) ||
					searchChar === '.' ||
					searchChar === '\n'
				) {
					continue;
				}

				symbols.push({
					char: searchChar,
					x: lineX,
					y: lineY
				});

				valid = true;
				break;
			}
		}

		partNumbers.push({
			number: numString,
			startIndex,
			valid,
			symbols
		});
	}

	return partNumbers;
}

export { parsePartNumbers2 };
