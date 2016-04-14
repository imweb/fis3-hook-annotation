
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
    es6: function(file) {
        file.parser = fis.plugin('babel');
    },
    uglify: function() {
        file.optimizer = fis.plugin('uglify-js');
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

