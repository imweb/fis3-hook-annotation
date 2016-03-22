
var set = require('./lib/set');

module.exports = function(fis, opts) {
    var media = fis.project.currentMedia();
    fis.on('compile:start', function(file) {
        set(file, media);
    });
};

