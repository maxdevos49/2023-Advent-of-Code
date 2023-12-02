import process from "node:process";
import { parseCalibrationData2 } from './parse-calibration-data-2.js';
import { loadTextFile } from '../../day-1-part-1/src/load-text-file.js';

/**
 * Day 1 Part 2 main function.
 *
 * @param {string[]} argv Command line arguments
 */
function main(argv) {
	try {
		const calibrationData = loadTextFile(argv[2]);
		const calibrationSum = parseCalibrationData2(calibrationData);

		console.log("Calibration Sum: " + calibrationSum)
		process.exit(0);
	} catch (error) {
		console.error(error && typeof error === "object" && "message" in error ? error?.message : "Unknown error occured.");
		process.exit(1);
	}
}

main(process.argv);