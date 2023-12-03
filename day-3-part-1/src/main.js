import process from 'node:process';
import { loadTextFile } from '../../day-1-part-1/src/load-text-file.js';
import { parsePartNumbers } from './parse-part-numbers.js';

/**
 * Day 3 part 1 main function.
 *
 * @param {string[]} argv Command line arguments
 */
function main(argv) {
	try {
		const data = loadTextFile(argv[2]);

		const partNumbers = parsePartNumbers(data);

		let sum = 0;
		for (const partNumber of partNumbers) {
			if (partNumber.valid) {
				sum += Number.parseInt(partNumber.number);
			}
		}
		console.log('Part Number: ' + sum);

		process.exit(0);
	} catch (error) {
		console.error(
			'\n' +
				(error && typeof error === 'object' && 'message' in error
					? error?.message
					: 'Unknown error occured.')
		);
		console.error(
			`\nUsage:\n\tnode ./${
				argv[1].split('/')[argv[1].split('/').length - 1]
			}\n\n`
		);
		process.exit(1);
	}
}

main(process.argv);
