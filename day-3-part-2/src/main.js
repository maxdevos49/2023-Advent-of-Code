import process from 'node:process';
import { loadTextFile } from '../../day-1-part-1/src/load-text-file.js';
import { parsePartNumbers2 } from './parse-part-numbers-2.js';

/**
 * Day 3 part 2 main function.
 *
 * @param {string[]} argv Command line arguments
 */
function main(argv) {
	try {
		const data = loadTextFile(argv[2]);

		const potentialGears = parsePartNumbers2(data).filter((part) =>
			part.symbols.some((symbol) => symbol.char === '*')
		);

		let sumGearRatios = 0;

		/** @type {Record<string,import('./parse-part-numbers-2.js').PartNumber[]} */
		const partsGroupedBySymbol = {};
		for (const part of potentialGears) {
			for (const symbol of part.symbols) {
				const symbolKey = `X:${symbol.x},Y:${symbol.y},C:${symbol.char}`;
				if (!partsGroupedBySymbol[symbolKey]) {
					partsGroupedBySymbol[symbolKey] = [];
				}

				partsGroupedBySymbol[symbolKey].push(part);
			}
		}

		for (const partGroup of Object.values(partsGroupedBySymbol)) {
			if (partGroup.length < 2) {
				continue;
			}

			sumGearRatios += partGroup.reduce(
				(acc, part) => Number.parseInt(part.number) * acc,
				1
			);
		}

		console.log('Gear Ratio Sum: ' + sumGearRatios);

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
