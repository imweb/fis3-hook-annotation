

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
    release: function(file, params) {
        file.release = params[1] || file.release;
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
    }
};

