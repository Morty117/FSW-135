const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const userRouter = require('./routes/userRouter')
const issueRouter = require('./routes/issueRouter')
const commentRouter = require('./routes/commentRouter')

app.use(express.json())
app.use(morgan('dev'))

main().catch(err => console.log(err))
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/climate-action')
}

// Routes
app.use('/users', userRouter)
app.use('/issues', issueRouter)
app.use('/comments', commentRouter)

// Error
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log('Server running on port 9000')
})