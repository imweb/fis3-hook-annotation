# fis3-hook-annotation

fis3注解, 使用注解修改fis文件属性, 精简`fis-conf.js`

## Demo

```js
// js src file
/**
 * @moduleId "${subpath}"
 */
// ... other code
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

`file.wrap = false`

#### `@noMod`

`file.isMod = false`

#### `@moduleId` `{String}`

`file.moduleId = {String}`

#### `@release` `{String}`

`file.release = {String}`

#### `@es6`

`file.parser = fis.plugin('babel')` babel

#### `@noParser`

`file.parser = null` 取消babel parser

#### `@uglify`

`file.optimizer = fis.plugin('uglify-js')` uglify压缩

#### `@noOptimizer`

`file.optimizer = null` 取消min压缩

## Note

- 注解需放在文件第一个块注释中

