const Course = require("./model")

exports.createNewCourse = async (req, res) => {
    try {
        const course = new Course(req.body) 
        await course.save()
        res.sendStatus(200)
    } catch(e) {
        res.status(500).json(e)
    }
}
