/*
 * @Version    : v1.00
 * @Author     : wangchao
 * @Date       : 2024-03-06 15:12
 * @LastAuthor : wangchao
 * @LastTime   : 2024-03-08 16:10
 * @desc       : 主页面
 */

import Upload from "./components/upload.client";

export default function App() {
  return (
    <div>
      <h1 className="flex justify-center text-4xl my-5">目录树生成器</h1>
      <div className="App">
        <Upload />
      </div>
    </div>
  );
}
