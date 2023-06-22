const mongoose = require("mongoose")

const AddstudentsSchema = mongoose.Schema({
   name:String,
   email:String,
   password:String,
   grade:String,
   areaOfStudy:String,
   skills:String,
   language:String,
   qualification:String,
   specialization:String,
   teachingExp:String,
   type:String,
   addData:String,
})

module.exports = mongoose.model("Addstudents", AddstudentsSchema);