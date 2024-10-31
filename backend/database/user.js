const mongoose  = require('mongoose')

const userSchema = mongoose.Schema(
    {
name :String,
email : String,
pass : String
}
)
 
const mydata = mongoose.model("Myuser", userSchema );
module.export = mydata