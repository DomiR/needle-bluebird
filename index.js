var needle = require("needle");
var Promise = require("bluebird");
module.exports = Promise.promisifyAll(needle, {multiArgs:true});
