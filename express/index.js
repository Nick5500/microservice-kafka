const express = require('express');

const { kafka }  = require('./config')
const userRouter = require('./routes/user-router')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())

app.use('/users', userRouter)

app.listen(PORT, () => {
  console.log(`App started on ${ PORT } port`)
})