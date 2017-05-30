ssh登录服务器，在根目录下执行：

````
cd /etc/nginx/conf.d

mkdir www-fayinme-cn-3001.conf

sudo vi www-fayinme-cn-3001.conf

````

www-fayinme-cn-3001.conf 文件

````
upstream blog {
        server 127.0.0.1:3380;
}

server {
        listen 80;
        server_name blog.fayinme.cn;
        location / {
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forward-For $proxy_add_x_forwarded_for;
                proxy_set_header Host $http_host;

                proxy_set_header X-Nginx-Proxy true;

                proxy_pass http://blog;
                proxy_redirect off;
        }
}

````
保存成功后，cd 到根目录下，重启nginx：`sudo nginx -s reload`