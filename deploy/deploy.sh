#!/bin/bash

[ ! -d release-dist ] && mkdir release-dist

echo $(=======开始生成打包包文件==========)
myPath='./release-dist/release.zip'
SHELL_FOLDER=$(
  cd "$(dirname "$0")"
  pwd
)

echo "当前路径 $SHELL_FOLDER $1"

cd $SHELL_FOLDER
cd ..
# rm -rf  ./release-dist/*
# echo '======文件删除完成======'
# find $SHELL_FOLDER -name dist

filename=web-$2-$1-$(date +%Y%m%d)_$(date +%H%M)
echo $filename
cd dist
# 生成版本号文件并写入
echo $filename >version.txt
cd ..
# 复制当前dist 文件夹 为版本号文件
cp -R dist $filename
# 压缩整个文件夹
zip -q -r $filename.zip ./$filename
# 移动文件夹到前端记录版本的release-dist 中方便前端追溯
mv ./$filename.zip ./release-dist
cd ./release-dist
echo "当前路径 $SHELL_FOLDER $1"
cd ..
# 删除外层未被压缩的文件
rm -r $filename

# git commit -am 'fix: 提交打包'
# git pull
# git push
echo $(========打包文件生成结束=========)
