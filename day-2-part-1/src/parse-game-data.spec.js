import assert from 'node:assert';
import { parseGameData } from './parse-game-data.js';
import { loadTextFile } from '../../day-1-part-1/src/load-text-file.js';

const exampleData = loadTextFile('./day-2-part-1/example-input.txt');
const games = parseGameData(exampleData);

describe('parseGameData(data: string): BagGame', () => {
	describe('Example Game 1', () => {
		const expectedId = 1;
		const expectedRed = 4;
		const expectedGreen = 2;
		const expectedBlue = 6;

		const game = games[0];

		it('Should parse the correct game id', () =>
			assert.strictEqual(game.id, expectedId));
		it('Should parse the correct red cubes', () =>
			assert.strictEqual(game.redCubes, expectedRed));
		it('Should parse the correct green cubes', () =>
			assert.strictEqual(game.greenCubes, expectedGreen));
		it('Should parse the correct blue cubes', () =>
			assert.strictEqual(game.blueCubes, expectedBlue));
	});

	describe('Example Game 2', () => {
		const expectedId = 2;
		const expectedRed = 1;
		const expectedGreen = 3;
		const expectedBlue = 4;

		const game = games[1];

		it('Should parse the correct game id', () =>
			assert.strictEqual(game.id, expectedId));
		it('Should parse the correct red cubes', () =>
			assert.strictEqual(game.redCubes, expectedRed));
		it('Should parse the correct green cubes', () =>
			assert.strictEqual(game.greenCubes, expectedGreen));
		it('Should parse the correct blue cubes', () =>
			assert.strictEqual(game.blueCubes, expectedBlue));
	});

	describe('Example Game 3', () => {
		const expectedId = 3;
		const expectedRed = 20;
		const expectedGreen = 13;
		const expectedBlue = 6;

		const game = games[2];

		it('Should parse the correct game id', () =>
			assert.strictEqual(game.id, expectedId));
		it('Should parse the correct red cubes', () =>
			assert.strictEqual(game.redCubes, expectedRed));
		it('Should parse the correct green cubes', () =>
			assert.strictEqual(game.greenCubes, expectedGreen));
		it('Should parse the correct blue cubes', () =>
			assert.strictEqual(game.blueCubes, expectedBlue));
	});

	describe('Example Game 4', () => {
		const expectedId = 4;
		const expectedRed = 14;
		const expectedGreen = 3;
		const expectedBlue = 15;

		const game = games[3];

		it('Should parse the correct game id', () =>
			assert.strictEqual(game.id, expectedId));
		it('Should parse the correct red cubes', () =>
			assert.strictEqual(game.redCubes, expectedRed));
		it('Should parse the correct green cubes', () =>
			assert.strictEqual(game.greenCubes, expectedGreen));
		it('Should parse the correct blue cubes', () =>
			assert.strictEqual(game.blueCubes, expectedBlue));
	});

	describe('Example Game 5', () => {
		const expectedId = 5;
		const expectedRed = 6;
		const expectedGreen = 3;
		const expectedBlue = 2;

		const game = games[4];

		it('Should parse the correct game id', () =>
			assert.strictEqual(game.id, expectedId));
		it('Should parse the correct red cubes', () =>
			assert.strictEqual(game.redCubes, expectedRed));
		it('Should parse the correct green cubes', () =>
			assert.strictEqual(game.greenCubes, expectedGreen));
		it('Should parse the correct blue cubes', () =>
			assert.strictEqual(game.blueCubes, expectedBlue));
	});
});
