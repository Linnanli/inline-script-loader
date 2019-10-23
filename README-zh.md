# inline-script-loader

这是一个`webpack loader`，可以在`html`中嵌入`javascript`

<p align="center">
   📘 <a href="./README.md">English</a> 
</p>

# 安装

## npm

``` hash
$ npm install inline-script-loader --save-dev
```

## yarn

``` hash
$ yarn add inline-script-loader -D
```

# 如何使用

创建一个 `javascript` 文件: `common/lib/global.js`

``` javascript
var global = {
    name:'inline-script-loader'
};
```

并在`src/index.html`模板文件中引入

```html
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

最后 `webpack` 输出 `dist/index.html`

```html
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

## id

定义内联脚本`<script>`标签的id

* example

```javascript

require('inline-script-loader?id=inline-script!common/lib/global.js')

```

* output

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Document</title>
    <script type="text/javascript" id="inline-script">
        var global = {
            name:'inline-script-loader'
        };
    </script>
</head>
<body>
</body>
</html>
```

## type

定义内联脚本`<script>`标签的`type`属性

* example

```javascript

require('inline-script-loader?type=text/ecmascript!common/lib/global.js')

```

* output

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Document</title>
    <script type="text/ecmascript">
        var global = {
            name:'inline-script-loader'
        };
    </script>
</head>
<body>
</body>
</html>
```

## isUglify

是否压缩脚本

* example

```javascript

require('inline-script-loader?isUglify=true!common/lib/global.js')

```

* output

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Document</title>
    <script type="text/ecmascript">
        var global={name:'inline-script-loader'};
    </script>
</head>
<body>
</body>
</html>
```

# License

#### [MIT](./LICENSE)
