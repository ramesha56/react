const mongoose  = require('mongoose')
const express = require('express')
const cors = require('cors')
const mydata = require('./database/user.js')


mongoose.connect('')


const app = express();

app.use(express.json());
app.use(cors());

app.post('/',(req, res)=>{
    mydata.create(req.body).then(mydatauser =>res.json(mydatauser));
})
app.post('/login' , (req, res)=>{
    const [loginemail, loginpassword] =req.body
    mydata.findOne({
        email : loginemail
    }).then(user =>{
        if(user){
            if(user.pass == loginpassword){
                res.json('sucess');
            }
            else{
                res.json('incorrect password');
            }
        }
        else{
            res.json('User Not Found');
        }
    })
})

app.listen(4000, ()=>{
    console.log('Running')
})