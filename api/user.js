//获取用户
const getUser = async(ctx, next) => {
  ctx.response.body = {
    code: 0,
    data: {
      username: 'tongzhengwei',
      score: 100
    }
  }
}

//用户注册
const saveUser = async(ctx, next) => {
  ctx.response.body = {
    code: 0
  }
}
module.exports = {
  getUser,
  saveUser
}