### Linux/Unix 系统终端命令

1、Nginx 相关命令

```shell


```

2、ps 命令

```shell
ps aux | grep node/PM2 //ps(process status): 系统中处于 running 的进程; aux: 显示所有包含其他使用者的行程


```

3、pm2 命令

```
npm install pm2 -g  安装

pm2 monit   监控

pm2 list    列出所有进程

pm2 stop    停止
pm2 restart 重启
pm2 delete  删除

pm2 start app.js -i max //max means that PM2 will auto detect the number of available CPUs and run as many processes as possible

```
