const Router = require('koa-router');
const userapi = require('../api/user');


const getUser = new Router()
getUser.get('/getUser', userapi.getUser);

const saveUser = new Router()
saveUser.post('/saveUser', userapi.saveUser);

const routerAll = new Router();
routerAll.use('/api', getUser.routes(), getUser.allowedMethods())
routerAll.use('/api', saveUser.routes(), saveUser.allowedMethods())

module.exports = routerAll;