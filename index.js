const loaderUtils = require('loader-utils');
const fs = require('fs');
const uglifyJs = require('uglify-es');

module.exports = function(source){
    if (this.cacheable)
        this.cacheable();

    let { scriptType = 'text/javascript', id = '', isUglify = false} = loaderUtils.getOptions(this) || {};
    let result = '';

    if (id){
        id = `id=${id}`;
    }
    
    if (isUglify){
        let minifyCode = uglifyJs.minify(source)
        if (minifyCode.error) 
            new Error(minifyCode.error);
        result = minifyCode.code;
        result = result.replace(/(.*)/, `module.exports = '<script type=${scriptType} ${id}>$1</script>'`);
    }else{
        result = source.replace(/\n/g, "\\n")
            .replace(/\r/g, "\\r")
            .replace(/(.*)/, `module.exports = "<script type=${scriptType} ${id}>$1</script>"`);
    }

    return result;
}