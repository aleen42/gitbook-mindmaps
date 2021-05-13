/***********************************************************************
 *                                                                   _
 *       _____  _                           ____  _                 |_|
 *      |  _  |/ \   ____  ____ __ ___     / ___\/ \   __   _  ____  _
 *      | |_| || |  / __ \/ __ \\ '_  \ _ / /    | |___\ \ | |/ __ \| |
 *      |  _  || |__. ___/. ___/| | | ||_|\ \___ |  _  | |_| |. ___/| |
 *      |_/ \_|\___/\____|\____||_| |_|    \____/|_| |_|_____|\____||_|
 *
 *      ================================================================
 *                 More than a coder, More than a designer
 *      ================================================================
 *
 *
 *      - Document: index.js
 *      - Author: aleen42
 *      - Description: the main entrance for tests
 *      - Create Time: May 13rd, 2021
 *      - Update Time: May 13rd, 2021
 *
 *
 **********************************************************************/

const parse = require('markmap/lib/parse.markdown');

/**
 * [should: test framework module]
 * @type {Object}
 */
const should = require('chai').should();

describe('markmap', () => {
	it('nested headings limit with 6 levels', () => {
		const content = Array(11).fill('').map((v, i) => `${'#'.repeat(i + 1)} ${i + 1}\n\n`).join('');
		parse(content).length.should.to.equal(6)
	});

	it('nested list options should not limit within 10 levels', () => {
		const n = 11;
		const content = Array(n).fill('').map((v, i) => `${'  '.repeat(i)} - ${i + 1}\n`).join('');
		parse(content).length.should.to.equal(n * 2);
	});
});
