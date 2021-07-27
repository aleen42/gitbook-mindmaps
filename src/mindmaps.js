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
 *  - Update Time: Jul 27th, 2021
 *
 */

/* global gitbook */
require('markmap-tree');
require('./index.css');
require('markmap/style/view.mindmap.css');

const parse = require('markmap-parser');
const transform = require('markmap-transform');

const markmap = require('markmap-mindmap');

const entry = () => document.querySelectorAll('svg.mindmaps').forEach(/** @type SVGElement */svg => {
    markmap(svg, transform(parse(JSON.parse(svg.getAttribute('data-content')))), {
        preset: svg.getAttribute('color') ? 'colorful' : 'default',
    });
});

// noinspection JSUnresolvedVariable
gitbook.events.bind('page.change', entry);
