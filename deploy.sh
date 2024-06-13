# 忽略错误
set -e

# 打包（构建）
npm run build

# 进入待发布目录
cd dist

# 将代码提交到gitee上，进行托管
git init
git add -A
git commit -m 'build-online'

# 部署到github上
git push -f https://gitee.com/xiangyang666/software-studio-frontend master:gh-pages

cd -