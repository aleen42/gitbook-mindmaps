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
 *  - Description: The runtime script
 *  - Create Time: Jun 27th, 2019
 *  - Update Time: Jun 27th, 2019
 *
 */

/* global $ */
require('markmap-tree');
require('./index.css');
require('markmap/style/view.mindmap.css');

const parse = require('markmap-parser');
const transform = require('markmap-transform');

const markmap = require('markmap-mindmap');

const entry = () => $('svg.mindmaps').each(function () {
    const $svg = $(this);
    markmap($svg[0], transform(parse(JSON.parse($svg.data('content')))), {
        preset: $svg.attr('color') ? 'colorful' : 'default',
    });
});

// noinspection JSUnresolvedVariable
gitbook.events.bind('page.change', entry);
