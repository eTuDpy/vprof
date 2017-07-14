/**
 * @file Graph coloring functions.
 */

'use strict';
const d3 = require('d3');

const MAX_COLOR_DOMAIN_VALUE = Math.pow(2, 32);

/**
 * Creates color scale that maps hashes (integers) to specified color ranges.
 */
function createColorScale() {
  return d3.scaleSequential(d3.interpolateRainbow)
    .domain([0, MAX_COLOR_DOMAIN_VALUE]);
};

module.exports = {
  'createColorScale': createColorScale
};

