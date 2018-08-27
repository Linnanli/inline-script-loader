const loaderUtils = require('loader-utils');
const fs = require('fs');
const uglifyJs = require('uglify-es');

module.exports = function (source) {
    if (this.cacheable)
        this.cacheable();

    let { scriptType = 'text/javascript', id = '', isUglify = false } = loaderUtils.getOptions(this) || {};
    let result = '';
    let jsStr = ''

    if (isUglify) {
        let minifyCode = uglifyJs.minify(source)
        if (minifyCode.error)
            new Error(minifyCode.error);
        jsStr = JSON.stringify(minifyCode.code)
    } else {
        jsStr = JSON.stringify(source)
    }
    result = `module.exports = "<script type=${scriptType} ${id ? `id=${id}` : ''}>${jsStr.replace(/(^"|"$)/g, "")}</script>"`;

    return result;
}