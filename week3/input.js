const express = require('express');
const app = express();

app.use(express.json());

app.post('/input',(req,res)=>{
    const {username,passowrd} = req.body;
    if(username !== 'aditya' || typeof username !== "string" || username.length < 3 ){
        return res.status(400).json({error : 'Invalid'})
    }
    res.send('Success');
})
const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));