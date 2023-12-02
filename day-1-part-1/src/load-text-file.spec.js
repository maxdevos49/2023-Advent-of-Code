import assert from "node:assert";
import { loadTextFile } from './load-text-file.js';


describe("loadTextFile(path: string): string", () => {
	it("Should return the expected file contents with a valid file path", () => {
		const expectedContents = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

		assert(loadTextFile("./day-1-part-1/example-input.txt"), expectedContents);
	});

	it("Should throw an exception if the file path is invalid or no file exists", () => {
		try {
			loadTextFile("this/does/not/exist.txt");
		} catch (err) {
			assert(true);
		}
	});
});