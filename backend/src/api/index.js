const { Router } = require("express")
const router = Router()

router.use("/item", require("./item"))
router.use("/course", require("./course"))

module.exports = router