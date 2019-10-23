# inline-script-loader

This is a `webpack loader` that can embed `javascript` in `html`.

<p align="center">
   📘 <a href="./README-zh.md">中文文档</a> 
</p>

# Installation

## npm

``` hash
$ npm install inline-script-loader --save-dev
```

## yarn

``` hash
$ yarn add inline-script-loader -D
```

# Usage

Create a `javascript` file: `common/lib/global.js`

``` javascript
var global = {
    name:'inline-script-loader'
};
```

And introduced in the `src/index.html` template file

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

Finally `webpack` output `dist/index.html`

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

Define the id of the inline script `<script>` tag

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

Define the type attribute of the inline script `<script>` tag

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

Whether to compress the script

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
