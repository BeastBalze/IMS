const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please Enter a name"]
    },

    email: {
        type: String,
        require: [true, "Please enter your email"],
        unique: [true, "Email Already Exist"]
    },

    password: {
        type: String,
        require: [true, "Please Enter a Password"],
        minlength: [6, "Password must be atleast 6 character"],
        select: false
    },

    studentID : {
        type : String,
        require : [true, "Student ID is required"]
    },

    course : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Course"
    },

    institute: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Institute",
    },


    resetPasswordToken : String,

    resetPasswordTokenExpire : Date
})

module.exports = new mongoose.model("Student", studentSchema)