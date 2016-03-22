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

`@annotation[:media] ["param"]..`

## API

### js文件

#### `@noWrap` 

`file.wrap = false`

#### `@noMod`

`file.isMod = false`

#### `@moduleId` `{String}`

`file.moduleId = {String}`

#### `@es6`

`file.parser = fis.plugin('babel')`

#### `@noParser`

`file.parser = null`

## Note

- 注解需放在文件第一个块注释中

