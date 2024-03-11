/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-03-08 21:20
 * @LastAuthor : itchaox
 * @LastTime   : 2024-03-11 20:41
 * @desc       :
 */
'use client';

import React, { useState } from 'react';

const FolderUpload = () => {
  const [folderStructure, setFolderStructure] = useState(null);

  const handleFolderUpload = (event) => {
    const folderInputs = event.target.files;

    if (folderInputs.length > 0) {
      let rootFolder = null;

      for (let i = 0; i < folderInputs.length; i++) {
        const folderInput = folderInputs[i];

        if (folderInput.webkitRelativePath) {
          const folderStructure = parseFolderStructure(folderInput.webkitRelativePath);

          if (rootFolder === null) {
            rootFolder = folderStructure;
          } else {
            // 合并 folderStructure 到 rootFolder
            mergeFolderStructures(rootFolder, folderStructure);
          }
        }
      }

      setFolderStructure(rootFolder);
    }
  };

  const mergeFolderStructures = (rootFolder, folderStructure) => {
    const mergeChildren = (children1, children2) => {
      const mergedChildren = [...children1];

      for (const child2 of children2) {
        const existingChild = mergedChildren.find((child1) => child1.name === child2.name);

        if (existingChild) {
          if (child2.type === 'folder') {
            existingChild.type = 'folder';
            existingChild.children = mergeChildren(existingChild.children || [], child2.children);
          }
        } else {
          mergedChildren.push(child2);
        }
      }

      return mergedChildren;
    };

    rootFolder.children = mergeChildren(rootFolder.children, folderStructure.children);
  };

  const parseFolderStructure = (relativePath) => {
    const pathParts = relativePath.split('/');
    const rootFolderName = pathParts[0];
    const rootFolder = { name: rootFolderName, type: 'folder', children: [] };

    const buildFolderStructure = (currentFolder, startIndex) => {
      let currentIndex = startIndex;
      while (currentIndex < pathParts.length) {
        const pathPart = pathParts[currentIndex];

        if (pathPart) {
          const isFolder = pathPart.endsWith('/');
          const itemName = isFolder ? pathPart.slice(0, -1) : pathPart;

          const existingItem = currentFolder.children.find((child) => child.name === itemName);

          if (existingItem) {
            if (isFolder) {
              currentIndex = buildFolderStructure(existingItem, currentIndex + 1);
            } else {
              currentIndex++;
            }
          } else {
            const newItem = { name: itemName, type: isFolder ? 'folder' : 'file', children: isFolder ? [] : undefined };
            currentFolder.children.push(newItem);

            if (isFolder) {
              currentIndex = buildFolderStructure(newItem, currentIndex + 1);
            } else {
              currentIndex++;
            }
          }
        } else {
          currentIndex++;
        }
      }

      return currentIndex;
    };

    buildFolderStructure(rootFolder, 1);

    return rootFolder;
  };

  const renderFolderStructure = (folderStructure) => {
    return (
      <ul>
        {folderStructure.children.map((child, index) => (
          <li key={index}>
            {child.type === 'folder' ? `📁 ${child.name}` : `📄 ${child.name}`}
            {child.children && child.children.length > 0 && renderFolderStructure(child)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <input
        type='file'
        webkitdirectory='true'
        directory=''
        onChange={handleFolderUpload}
      />
      {folderStructure && renderFolderStructure(folderStructure)}
    </div>
  );
};

export default FolderUpload;
