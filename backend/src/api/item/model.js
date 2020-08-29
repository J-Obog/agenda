const { Schema, model, ObjectId } = require("../config")

const itemSchema = new Schema({
    title: {
        type:String, 
        required:true
    }, 
    description: { 
        type:String,
        required:false
    },
    class_id: {
        type:ObjectId, 
        required:true,
        ref: "Course"
    }
}, {
    collection: "item"
})


module.exports = model("Item", itemSchema)