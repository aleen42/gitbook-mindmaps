/*
 *                                                               _
 *   _____  _                           ____  _                 |_|
 *  |  _  |/ \   ____  ____ __ ___     / ___\/ \   __   _  ____  _
 *  | |_| || |  / __ \/ __ \\ '_  \ _ / /    | |___\ \ | |/ __ \| |
 *  |  _  || |__. ___/. ___/| | | ||_|\ \___ |  _  | |_| |. ___/| |
 *  |_/ \_|\___/\____|\____||_| |_|    \____/|_| |_|_____|\____||_|
 *
 *  ===============================================================
 *             More than a coder, More than a designer
 *  ===============================================================
 *
 *  - Document: index.js
 *  - Author: aleen42
 *  - Description: The script for building pages
 *  - Create Time: Jun 27th, 2019
 *  - Update Time: Jun 27th, 2019
 *
 */

const reg = /^\s*```\s{0,4}mind(?::(.+))?((.*[\r\n]+)+?)?\s*```$/im;
const escapeHTML = str => str.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

const handler = page => {
    let result;

    while ((result = reg.exec(page.content))) {
        const [block, conditions, content] = result;
        const {height, color, title} = (conditions || '').split(',').reduce((obj, cond) => {
            const [key, value] = cond.split('=');
            obj[key] = value || true;
            return obj;
        }, {});

        page.content = page.content.replace(block, `<p class="mindmaps-wrapper" align="center"><svg
            style="${height ? `height: ${height}px` : ''}"
            class="mindmaps" ${color ? 'color="true"' : ''}
            data-content="${escapeHTML(JSON.stringify(content))}"></svg>
            ${title ? `<p align="center">${title}</p>` : ''}</p>`);
    }

    return page;
};

module.exports = {
    book: {
        assets: './assets',
        css: ['mindmaps.css'],
        js: ['mindmaps.dist.js'],
    },
    hooks: {
        'page:before': handler,
        'page:change': handler,
    },
};
