
exports.getValue = function(str) {
    if (str === 'false') {
        return false;
    } else if (str === 'null') {
        return null;
    } else {
        return str;
    }
};

