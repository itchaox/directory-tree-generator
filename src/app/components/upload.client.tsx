/*
 * @Version    : v1.00
 * @Author     : wangchao
 * @Date       : 2024-03-06 15:12
 * @LastAuthor : wangchao
 * @LastTime   : 2024-03-08 17:08
 * @desc       : 主页面
 */

"use client";

import { useState } from "react";

export default function App() {
  const [dirTree, setDirTree] = useState(null);

  const myUpload = (file: any) => {
    // 在这里读取文件夹内容并生成目录树结构
    const dirTree = readDirectoryTree(file);
    setDirTree(dirTree);

    console.log(dirTree);
  };

  // 递归读取文件夹内容并生成目录树结构
  const readDirectoryTree = (directory) => {
    console.log("🚀  directory:", directory.webkitGetAsEntry);
    // const dirReader = directory.webkitGetAsEntry();
    // const result = [];

    // const readEntries = (dirEntry) => {
    //   const dirReader = dirEntry.createReader();

    //   dirReader.readEntries((entries) => {
    //     if (entries.length > 0) {
    //       for (let i = 0; i < entries.length; i++) {
    //         const entry = entries[i];
    //         if (entry.isDirectory) {
    //           const dirNode = {
    //             type: "dir",
    //             name: entry.name,
    //             children: [],
    //           };
    //           result.push(dirNode);
    //           readEntries(entry);
    //         } else {
    //           result.push({
    //             type: "file",
    //             name: entry.name,
    //           });
    //         }
    //       }
    //     }
    //   });
    // };

    // readEntries(dirReader);
    // return result;
  };

  return (
    <div>
      <input
        type="file"
        webkitdirectory="true"
        directory="true"
        onChange={(e) => myUpload(e)}
      />
      <div></div>
    </div>
  );
}
