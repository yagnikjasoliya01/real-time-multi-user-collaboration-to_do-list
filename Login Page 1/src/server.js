const express = require('express')
const mongoose  = require("mongoose")
const path  = require("path")
const port = 3000

const app = express();
app.use(express.static(__dirname));
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb://localhost:27017/students')
const db = mongoose.connection
db.once('open',()=>{
    console.log("Mongodb connecton sucessful");
})

const userSchema = new mongoose.Schema({
    name: String,
    email :String,
    pass_word:String 
})

const Users = mongoose.model("data",userSchema)
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'index.html'))
})

app.post('/post',async(req,res) =>{
    const {name,email,pass_word} = req.body
    const user = new Users({
        name,
        email,
        pass_word
    })
    await user.save()
    console.log(user);
    res.send("Form submission successful")
})

app.listen(port, ()=> {
    console.log("Server started");
})
