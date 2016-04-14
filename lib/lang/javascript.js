
var util = require('../util');

module.exports = {
    noMod: function(file) {
        file.isMod = false;
    },
    noWrap: function(file) {
        file.wrap = false;
    },
    moduleId: function(file, params) {
        file.moduleId = params[1] || file.moduleId;
    },
    // 撇开release
    releaseTo: function(file, params) {
        file.release = util.getValue(params[0]);
    },
    es6: function(file) {
        file.parser = fis.plugin('babel');
    },
    noParser: function(file) {
        file.parser = null;
    },
    uglify: function() {
        file.optimizer = fis.plugin('uglify-js');
    },
    noOptimizer: function(file) {
        file.optimizer = null;
    },
    /**
     * 清除wrap parser optimizer
     */
    useRaw: function(file) {
        file.wrap = false;
        file.parser = null;
        file.optimizer = null;
    }
};

