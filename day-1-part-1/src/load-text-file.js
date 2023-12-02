import fs from "node:fs";
import path from "node:path";

/**
 * Loads a file from a given path.
 *
 * @param {string} relativePath The path of the file to load
 * @returns {string} The contents of the file
 */
function loadTextFile(relativePath) {
    const resolvedPath = path.resolve(relativePath);
    if (!fs.existsSync(resolvedPath)) {
        throw new Error(`The file '${resolvedPath}' does not exist.`);
    }

    return fs.readFileSync(resolvedPath, "utf8");
}

export {
    loadTextFile
}