const {Router} = require("express");

const courseRouter = Router();

courseRouter.get("/listall", function(req, res){
    res.json({
        message : "All the courses are "
    })
})


module.exports = {
    courseRouter: courseRouter
}