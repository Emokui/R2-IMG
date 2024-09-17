**利用Cloudflare pages + R2 + KV 创建图床服务**


1.fork此项目 并在cloud flarepages里链接


2.输入编译参数 构建命令：npm run build    输出目录：dist  完成创建


3.创建R2存储桶和KV命名空间，r2子域开启允许访问，并在函数中绑定r2与kv


4.设置环境变量 


AUTH_TOKEN:密码

COPY_URL:复制的路径，如有 R2 存储桶自定义域名则填写自定义域名，否则开启并填写公共 R2.dev 存储桶的 URL

NODE_VERSION：20.11.1

NPM_VERSION：10.2.4


5.重试部署
