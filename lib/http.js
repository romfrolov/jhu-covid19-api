/**
 * HTTP methods.
 *
 * @module lib/http
 */

'use strict';

const fetch = require('node-fetch');
const qs    = require('qs');

/**
 * COVID19 API base URL.
 *
 * @type {String}
 */
const BASE_URL = 'https://api.covid19api.com';

exports.get = function get(path, query) {
    const queryString = qs.stringify(query);

    const url = `${BASE_URL}${path}?${queryString}`;

    const opts = {
        method:  'GET',
        headers: {
            'Accept': 'application/json'
        }
    };

    return fetch(url, opts)
        .then(checkStatus)
        .then(res => res.json());
};

/**
 * Check response status.
 *
 * @param  {Object}       res
 * @return {Object|Error}
 *
 * @throws error if status is outside the range [200..300).
 */
async function checkStatus(res) {
    if (res.ok) {
        return res;
    } else {
        const error  = await res.json();
        error.status = res.status;

        throw Error(JSON.stringify(error, null, 4));
    }
}
