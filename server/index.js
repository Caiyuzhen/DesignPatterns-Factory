// 建立一个服务
const { resolve } = require('path')
const express = require('express')
const app = express()

app.use('/', express.static(resolve(__dirname, '../modules')))

// 监听端口 localhost:3333
app.listen(3333)