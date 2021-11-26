- 使用全局变量空间是危险的，因为它会与文件内的代码命名冲突
- 你的 TypeScript 文件的根级别位置含有 import 或者 export，那么它会在这个文件中创建一个本地的作用域,避免命名冲突
- 只导入模块：
  import 'core-js'; // 一个普通的 polyfill 库
- 从其他模块导入后整体导出：
  export * from './foo';
- 从其他模块导入后，部分导出：
  export { someVar } from './foo';