# fis3-hook-annotation

使用注解修改fis文件属性, 精简`fis-conf.js`

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

### 所有文件

#### `@setProperty name value`

```js
file[`name`] = `value` // 设置任意属性
```

#### `@noParser`

```js
file.parser = null // 取消scss/es6 babel等parser
```

#### `@noOptimizer`

```js
file.optimizer = null // 取消min压缩
```

#### `@releaseTo release`

```js
file.release = `release`
```

### js文件

#### `@noWrap` 

```js
file.wrap = false // 将不会被CommonJs使用define包裹
```

#### `@noMod`

```js
file.isMod = false
```

#### `@moduleId moduleId`

```js
file.moduleId = `moduleId`
```

#### `@es6`

```js
file.parser = fis.plugin('babel')  // babel
```

#### `@uglify`

```js
file.optimizer = fis.plugin('uglify-js') // uglify压缩
```

#### `@useRaw`

```js
file.wrap = false;  // 不被define包裹
file.parser = null; // 取消parser
file.optimizer = null; // 取消min压缩
```

### css文件

#### `@useRaw`

```js
file.parser = null; // 取消parser
file.optimizer = null; // 取消min压缩
```

### html文件


## Note

- 注解需放在文件第一个块注释中

