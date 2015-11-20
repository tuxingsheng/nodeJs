var express = require('express');
var app = express();
var path = require('path');     // 路径模块
var bodyParser = require('body-parser');        // post请求体


app.use(express.static(path.join(__dirname,'app')));        //使用静态文件服务器中间件
app.use(bodyParser.json());     // 解析请求 content-type application/json
app.use(bodyParser.urlencoded({extended:false}));       // application/x-form-urlencoded

app.listen(8090,function(){
    console.log('服务器启动成功');
});