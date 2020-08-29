const Item = require("./model")

exports.getAllItems = async (_, res) => {
    try {
        const result = await Item.find().populate("course_id")
        res.json(result)
    } catch(e) {
        res.status(500).json(e)
    }
} 

exports.createNewItem = async (req, res) => {
    try {
        const item = new Item(req.body) 
        await item.save()
        res.sendStatus(200)
    } catch(e) {
        res.status(500).json(e)
    }
}
