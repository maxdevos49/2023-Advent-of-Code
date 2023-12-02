import process from "node:process";
import { loadTextFile } from '../../day-1-part-1/src/load-text-file.js';
import { parseGameData } from './parse-game-data.js';

/**
 * Day 2 part 1 main function.
 *
 * @param {string[]} argv Command line arguments
 */
function main(argv) {
	try {
		const maxRedCubes = Number.parseInt(argv[2]);
		if (Number.isNaN(maxRedCubes)) {
			throw new Error("Unable to parse a valid integer for maximum red cubes.")
		}
		const maxGreenCubes = Number.parseInt(argv[3]);
		if (Number.isNaN(maxGreenCubes)) {
			throw new Error("Unable to parse a valid integer for maximum green cubes.")
		}
		const maxBlueCubes = Number.parseInt(argv[4]);
		if (Number.isNaN(maxBlueCubes)) {
			throw new Error("Unable to parse a valid integer for maximum blue cubes.")
		}

		let sum = 0;
		const games = parseGameData(loadTextFile(argv[5]))

		for (const game of games) {
			if (game.redCubes <= maxRedCubes && game.greenCubes <= maxGreenCubes && game.blueCubes <= maxBlueCubes) {
				sum += game.id;
			}
		}

		console.log("Sum of valid game id's: " + sum)

		process.exit(0);
	} catch (error) {
		console.error("\n" + (error && typeof error === "object" && "message" in error ? error?.message : "Unknown error occured."));
		console.error(`\nUsage:\n\tnode ./${argv[1].split("/")[argv[1].split("/").length - 1]} <max_red_cubes> <max_green_cubes> <max_blue_cubes> <path_to_game_data>\n\n`);
		process.exit(1);
	}
}

main(process.argv);