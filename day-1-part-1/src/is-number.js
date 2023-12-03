/**
 * Determines if a character is a number character or not
 *
 * @param {string} char A character which may or may not be numeric
 * @returns {boolean} true if the character is a numeric. False on other cases.
 */
function isNumber(char) {
	return !Number.isNaN(parseInt(char));
}

export { isNumber };
