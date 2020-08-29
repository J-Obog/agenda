const { Router } = require("express")
const router = Router() 
const controller = require("./controller")


router.route("/item")
.get(controller.getAllItems)
.post(controller.createNewItem)

router.route("/class")
.post(controller.createNewClass) 

module.exports = router