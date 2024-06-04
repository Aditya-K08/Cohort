const express = require('express')
const app = express()
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hi to Todo Application')
})


app.post('/add-todo',(req,res)=>{
    const {title , description } = req.body;
    res.send('Success')
})

const PORT = 3000;
app.listen(PORT,()=> console.log(`App running on Port : ${PORT}`))