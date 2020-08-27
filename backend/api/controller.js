const Models = require("./model")

exports.getAllItems = async (_, res) => {
    try {
        const result = await Models.Item.find().populate("class_id")
        res.json(result)
    } catch(e) {
        res.status(500).json(e)
    }
} 

exports.createNewItem = async (req, res) => {
    try {
        const item = new Models.Item(req.body) 
        await item.save()
        res.sendStatus(200)
    } catch(e) {
        res.status(500).json(e)
    }
}

exports.createNewClass = async (req, res) => {
    try {
        const n_class = await Models.Class(req.body) 
        await n_class.save()
        res.sendStatus(200)
    } catch(e) {
        res.status(500).json(e)
    }
}
