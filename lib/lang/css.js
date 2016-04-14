
module.exports = {
    /**
     * 清除parser optimizer
     */
    useRaw: function(file) {
        file.parser = null;
        file.optimizer = null;
    }
};

