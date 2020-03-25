/**
 * Error class.
 *
 * @module lib/error
 */

'use strict';

module.exports = JhuCovid19ApiError;

/**
 * Default COVID19 API error.
 * @class
 *
 * @param {String} message
 */
function JhuCovid19ApiError(message) {
    if (!new.target) {
        return new JhuCovid19ApiError(message);
    }

    this.name    = 'JhuCovid19ApiError';
    this.message = `COVID19 API: ${message}`;
    this.stack   = (new Error()).stack;
}

JhuCovid19ApiError.prototype = new Error;
