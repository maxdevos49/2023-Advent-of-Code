import { isNumber } from './is-number.js';

/**
 * Parses the puzzle data.
 *
 * @param {string} data The calibration document.
 * @returns {number} The calibration sum.
 */
function parseCalibrationData(data) {
	let sum = 0;

	let firstNumber = '';
	let lastNumber = '';
	for (const letter of data) {
		if (letter === '\n') {
			sum += parseInt(firstNumber + lastNumber);
			firstNumber = '';
			lastNumber = '';

			continue;
		}

		if (isNumber(letter)) {
			if (firstNumber === '') {
				firstNumber = letter;
				lastNumber = letter;
				continue;
			}

			lastNumber = letter;
		}
	}

	sum += parseInt(firstNumber + lastNumber);

	return sum;
}

export { parseCalibrationData };
