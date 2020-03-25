/**
 * COVID19 API.
 *
 * @module api
 */

'use strict';

const http  = require('../lib/http');

/**
 * List all the current routes available with detail on each.
 *
 * @return {Promise<Object>}
 */
exports.default = function getDefault() {
    return http.get('');
};

/**
 * A summary of new and total cases per country updated daily.
 *
 * @return {Promise<Object>}
 */
exports.summary = function summary() {
    const path = '/summary';

    return http.get(path);
};

/**
 * Returns all the available countries and provinces, as well as the country
 * slug for per country requests.
 *
 * @return {Promise<Object>}
 */
exports.countries = function countries() {
    const path = '/countries';

    return http.get(path);
};

/**
 * Returns all daily data.
 * This call results in 10MB of data being returned and should be used
 * infrequently.
 *
 * @return {Promise<Object>}
 */
exports.allData = function allData() {
    const path = '/all';

    return http.get(path);
};

/**
 * Returns statistics.
 *
 * @return {Promise<Object>}
 */
exports.stats = function stats() {
    const path = '/stats';

    return http.get(path);
};
