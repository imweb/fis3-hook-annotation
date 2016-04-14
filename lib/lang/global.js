
var util = require('../util');

module.exports = {
    /**
     * 设置任意的属性
     * @example
     *      `@setProperty uglify null`
     * @param {String} params[0] name 
     * @param {String} params[1] value 
     */
    setProperty: function(file, params) {
        if (params.length >= 2) {
            var name = params[0],
                value = util.getValue(params[1]);
            file[name] = value;
        }
    },
    // 撇开release
    releaseTo: function(file, params) {
        file.release = util.getValue(params[0]);
    },
    noParser: function(file) {
        file.parser = null;
    },
    noOptimizer: function(file) {
        file.optimizer = null;
    }
};

