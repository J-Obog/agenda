const { Router } = require("express")
const router = Router() 
const itemController = require("./controller")

router.route("/item")
.get(itemController.getAllItems)
.post(itemController.createNewItem)

module.exports = router