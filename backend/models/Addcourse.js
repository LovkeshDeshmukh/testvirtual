const mongoose = require("mongoose")

const AddcourseSchema = mongoose.Schema({
   courseName:String,
   teacherName:String,
})

module.exports = mongoose.model("Addcourse", AddcourseSchema);