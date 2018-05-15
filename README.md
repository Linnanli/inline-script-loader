# inline-script-loader

这是一个可以将javascript内嵌到html中的 webpack loader

# 开始

1. 安装loader

```console
$ npm install inline-script-loader --save-dev
```

2. 在html模板中引入

```html
// src/index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Document</title>
    <%= require('inline-script-loader!common/lib/global.js') %>
</head>
<body>
</body>
</html>

```

最后生成模板

```html
// dist/index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Document</title>
    <script type="text/javascript">
        var global = {
            name:'inline-script-loader'
        };
    </script>
</head>
<body>
</body>
</html>

```

# Options

定义的内联脚本\<script\>标签的id

* 参数 :

    *  id [String]

* 用法 :

```javascript

require('inline-script-loader?id=inline-script!common/lib/global.js')

```

定义的内联脚本\<script\>标签的type属性

* 参数 :

    *   id [String]

* 用法 :

```javascript

require('inline-script-loader?type=template/javascript!common/lib/global.js')
or
require('inline-script-loader?type=ecmascript/javascript!common/lib/global.js')

```

是否压缩内联脚本

* 参数 :

    *  String [isUglify]

* 用法 :

```javascript

require('inline-script-loader?isUglify=true!common/lib/global.js')

```

# License

#### [MIT](./LICENSE)
