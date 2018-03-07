var app = require('koa')();
var router = require('koa-router')();

app.use(function *(){
    this.set('Cache-Control','no-cache');
    this.set('Access-Control-Allow-Origin','*');
    this.body = {name: 'czl'};
});
// 开始服务并生成路由
app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3000);
