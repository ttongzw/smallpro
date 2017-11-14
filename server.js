const Koa = require('koa');
const app = new Koa();
const routerAll = require('./router/user_router');

const main = ctx => {
  let param = ctx.request;
  // ctx.response.body = "sdfas"
}

// app.use(main);
app.use(routerAll.routes()).use(routerAll.allowedMethods());

app.listen(3000);