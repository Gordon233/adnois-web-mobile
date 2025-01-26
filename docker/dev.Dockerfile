FROM node:20-slim

WORKDIR /app

# 启用 corepack 并安装 pnpm
RUN npm i -g pnpm

# 复制包管理文件
COPY pnpm-workspace.yaml package.json pnpm-lock.yaml* ./
COPY turbo.json ./

# 复制子项目 package.json
COPY packages/api/package.json ./packages/api/
COPY packages/web/package.json ./packages/web/

# 安装依赖
RUN pnpm install --frozen-lockfile

# 复制所有源代码
COPY . .

EXPOSE 3333 5173

CMD ["pnpm", "dev"]