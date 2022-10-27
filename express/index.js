const express = require('express');
const dotenv = require('dotenv')

const { kafka }  = require('./config')
const userRouter = require('./routes/user-router')

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())

app.use('/users', userRouter)

app.listen(PORT, () => {
  console.log(`App started on ${ PORT } port`)
})