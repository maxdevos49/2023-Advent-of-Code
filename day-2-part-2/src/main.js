import process from "node:process";
import { loadTextFile } from '../../day-1-part-1/src/load-text-file.js';
import { parseGameData } from '../../day-2-part-1/src/parse-game-data.js';

/**
 * Day 2 part 1 main function.
 *
 * @param {string[]} argv Command line arguments
 */
function main(argv) {
    try {
        let sum = 0;
        const games = parseGameData(loadTextFile(argv[2]))

        for (const game of games) {
            sum += game.redCubes * game.greenCubes * game.blueCubes;
        }

        console.log("Sum power sets: " + sum)

        process.exit(0);
    } catch (error) {
        console.error("\n" + (error && typeof error === "object" && "message" in error ? error?.message : "Unknown error occured."));
        console.error(`\nUsage:\n\tnode ./${argv[1].split("/")[argv[1].split("/").length - 1]} <path_to_game_data>\n\n`);
        process.exit(1);
    }
}

main(process.argv);