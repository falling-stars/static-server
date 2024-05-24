const { resolve } = require('path')
const Koa = require('koa')
const static = require('koa-static')
const app = new Koa()

app.use(static(resolve(__dirname, './public')))

app.listen(80)