
var langMap = {
        global: require('./lang/global'), // 全局的注解
        js: require('./lang/js'),
        html: require('./lang/html'),
        css: require('./lang/css')
    };

var set = module.exports = function(file, media) {
    var lang = getLang(file);
    if (lang && langMap[lang]) {
        getAnnotation(file, lang)
            .forEach(function(item) {
                if (!item.media || item.media === media) {
                    /**
                     * @type {Function(File, Array.<String>)}
                     */
                    var fn = langMap[lang][item.name] 
                        || langMap.global[item.name];
                    fn && fn(file, item.params);
                }
            });
    }
};

/**
 * 获取文件语言
 * @param {File} file
 * @return {String} 
 */
function getLang(file) {
    var likes = file._likes;
    if (file.isJsLike || likes.isJsLike) {
        return 'js';
    } else if (file.isHtmlLike || likes.isHtmlLike) {
        return 'html';
    } else if (file.isCssLike || likes.isCssLike) {
        return 'css';
    }
    return null;
}

var FCMT_BLOCK_REG = /\/\*([\s\S]+?)\*\//,
    FCMT_BLOCK_REG_HTML = /<!--([\s\S]+?)-->/, // html注释
    ANNOTATION_REG = /@([\w\-]+)(:([\w\-]+))?([ \t]+.*)?/g;

/**
 * 获取文件注解
 * @param {File} file
 * @param {String} lang
 * @return {Array.<String>} 
 */
function getAnnotation(file, lang) {
    var list = [],
        content = (file.getContent() || '');
    // 防止大文件性能问题
    content = content.length > 1024 * 4 ? content.substr(0, 1000) : content;
    var REG = getLangFcmt(lang);
    if (content.match(REG)) {
        var fcmt = RegExp.$1 || '', 
            match;
        while (match = ANNOTATION_REG.exec(fcmt)) {
            list.push({
                name: match[1],
                media: match[3] || '',
                params: getAnnotationParams(match[4] || '').map(function(tpl) {
                    // 使用file做数据展开模板
                    return expandTpl(tpl, file);
                })
            });
        }
    }
    return list;
}

function getLangFcmt(lang) {
    return {
        html: FCMT_BLOCK_REG_HTML
    }[lang] || FCMT_BLOCK_REG;
}

var ANNOTATION_PARAM_REG = /([^\s"']+)|((["'])(.*?)\3)/g;
/**
 * 获取注解中的参数
 * @param {String} str
 * @return {Array.<String>} 
 */
function getAnnotationParams(str) {
    var list = [], match;
    while (match = ANNOTATION_PARAM_REG.exec(str)) {
        list.push(match[1] || match[4]);
    }
    return list;
}

var TPL_REG = /\$\{([^}]+)\}/g;
/**
 * 展开参数模板
 * @param {String} tpl
 * @param {Object} data
 * @return {String}
 */
function expandTpl(tpl, data) {
    return tpl.replace(TPL_REG, function(str) {
        var name = RegExp.$1;
        return data[name] !== undefined ? data[name] : str;
    });
}

