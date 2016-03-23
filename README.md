# fis3-hook-annotation

fis3注解, 使用注解修改fis文件属性, 精简`fis-conf.js`

## Demo

```js
/**
 * @moduleId "${subpath}"
 */
module.exports = {
    // ...
};
```

```js
// fis-conf.js
fis.hook('annotation');
```

## 语法

`@annotation[:media] [param]..`

## API

### js文件

#### `@noWrap` 

```js
file.wrap = false
```

#### `@noMod`

```js
file.isMod = false
```

#### `@moduleId` `{String}`

```js
file.moduleId = `{String}`
```

#### `@releaseTo` `{String}`

```js
file.release = `{String}`
```

#### `@es6`

```js
file.parser = fis.plugin('babel')  // babel
```

#### `@noParser`

```js
file.parser = null // 取消babel parser
```

#### `@uglify`

```js
file.optimizer = fis.plugin('uglify-js') // uglify压缩
```

#### `@noOptimizer`

```js
file.optimizer = null // 取消min压缩
```

## Note

- 注解需放在文件第一个块注释中

