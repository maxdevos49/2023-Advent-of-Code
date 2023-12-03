/**
 * @typedef {Object} BagGame
 * @property {number} id The game id.
 * @property {number} redCubes The most shown red cubes during game play.
 * @property {number} greenCubes The most shown green cubes during game play.
 * @property {number} blueCubes The most shown blue cubes during game play.
 */

/**
 * Parses the Cube bag game text data.
 *
 * @param {string} data
 * @returns {BagGame[]}
 */
function parseGameData(data) {
	/** @type {BagGame[]} */
	const games = [];

	for (const line of data.split('\n')) {
		const [identifier, plays] = line.split(': ');

		const id = Number.parseInt(identifier.split(' ')[1]);

		let redCubes = 0;
		let greenCubes = 0;
		let blueCubes = 0;

		for (const play of plays.split('; ')) {
			for (const cubeCount of play.split(', ')) {
				const [countStr, color] = cubeCount.split(' ');
				const count = Number.parseInt(countStr);

				if (color === 'red') {
					redCubes = Math.max(redCubes, count);
				} else if (color === 'green') {
					greenCubes = Math.max(greenCubes, count);
				} else {
					blueCubes = Math.max(blueCubes, count);
				}
			}
		}

		games.push({
			id,
			redCubes,
			greenCubes,
			blueCubes
		});
	}

	return games;
}

export { parseGameData };
