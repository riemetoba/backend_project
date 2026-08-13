const mongoose = require ('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    email:{
        type: String,
    },
    // otp: {
    //     type: String,
    //     required: true
    // },
    // isLogin: {
    //     type: Boolean,
    //     default: false
    // },
    userName:{
        type: String
    },
    role:{
        type: String,
        enum: ["student","teacher","management"],
        default: "student"
    },
    permission:{
        type: [String]
    }
})

module.exports = mongoose.model("User", userSchema)