'use strict';

var util = require('../util');

/**
 * BaseProvider is a base type for {@link pubfood/provider} types.
 *
 * @class
 * @memberof pubfood/provider
 */
function BaseProvider() {
  this.id = util.newId();
}

module.exports = BaseProvider;
