const mongoose  = require("mongoose");

const CourseSchema = mongoose.Schema({
    title: {type: String, required: true},
    miniature: {type: String, required: true},
    description: {type: String, required: true},
    url: {type: String, required: true},
    price: {type: Number, required: true, min: 0},
    score: {type: Number, min: 0, max: 5},
},
    { timestamps:true });

module.exports = mongoose.model("Course", CourseSchema);