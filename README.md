TypeScript Webpack Exclude "fs" Demo
====================================

```
npm install
npm run demo
```

原理是利用webpack的`alias`将`fs`替换为本地的另一个假的：

```
resolve: {
  alias: {
    "fs": "./dummy-fs"
  }
}
```
