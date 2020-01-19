#!/bin/bash

set -e # 遇到返回值非零退出
set -x # 显示执行的命令

cd ./packages/react/build/node_modules/react/umd
yarn link

cd ../../react-dom/umd
yarn link

cd ../../../../../example/
yarn link react
yarn link react-dom

cd ../../
yarn link react
yarn link react-dom
