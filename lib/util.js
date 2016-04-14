
exports.getValue = function(str) {
    str = str || '';
    return {
        'false': false,
        'null': null
    }[str] || str;
};

