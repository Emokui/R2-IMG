## 利用Cloudflare pages + R2 + KV 创建图床服务 ##

**1.fork此项目 并在cloud flarepages里链接** 

**2.输入编译参数 构建命令：npm run build    输出目录：dist  完成创建**  

**3.创建R2存储桶，并在函数中绑定** 

**4.设置环境变量**  

`AUTH_TOKEN`: `密码`  

`COPY_URL`: `复制的路径，如无，则输入page域名/rest`  

`NODE_VERSION`：`20.11.1`  

`NPM_VERSION`：`10.2.4`  

`R2`: `r2存储捅名称`  

**5.重试部署**
