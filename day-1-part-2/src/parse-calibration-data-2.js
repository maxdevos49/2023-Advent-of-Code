import { isNumber } from '../../day-1-part-1/src/is-number.js';

const NUM_STRINGS = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const NUM_VALUES = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

/**
 * Parses and calculates the calibration sum.
 *
 * @param {string} data The calibration data.
 * @returns {number} The calibration sum.
 */
function parseCalibrationData2(data) {
	let sum = 0;

	let firstNumber = '';
	let lastNumber = '';

	let searchIndex = -1;

	/**
	 * Helper function to record found numbers.
	 *
	 * @param {string} numChar The new number char that was found.
	 * @returns {void}
	 */
	const recordNumber = (numChar) => {
		if (firstNumber === "") {
			firstNumber = numChar;
			lastNumber = numChar;
		}

		lastNumber = numChar;
	}

	outer_loop: while (searchIndex++ < data.length) {
		const currentChar = data[searchIndex];
		if (currentChar === "\n") {
			sum += parseInt(firstNumber + lastNumber);
			firstNumber = "";
			lastNumber = "";

			continue;
		}

		if (isNumber(currentChar)) {
			recordNumber(currentChar);

			continue;
		}

		for (let i = 0; i < 9; i++) {
			if (data.substring(searchIndex, searchIndex + NUM_STRINGS[i].length) !== NUM_STRINGS[i]) {
				continue;
			}

			searchIndex += NUM_STRINGS[i].length - 1;
			recordNumber(NUM_VALUES[i]);

			continue outer_loop;
		}
	}

	sum += parseInt(firstNumber + lastNumber);

	return sum;
}

export {
	parseCalibrationData2
}