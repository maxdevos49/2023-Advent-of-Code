import process from 'node:process';
import { loadTextFile } from './load-text-file.js';
import { parseCalibrationData } from './parse-calibration-data.js';

/**
 * Main function.
 *
 * @param {string[]} argv
 */
function main(argv) {
	try {
		const calibrationData = loadTextFile(argv[2]);
		const calibrationSum = parseCalibrationData(calibrationData);

		console.log('Calibration Sum: ' + calibrationSum);
		process.exit(0);
	} catch (error) {
		console.error(
			error && typeof error === 'object' && 'message' in error
				? error?.message
				: 'Unknown error occured.'
		);
		process.exit(1);
	}
}

main(process.argv);
