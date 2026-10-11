const { Router } = require("express");


const userRouter = Router();


userRouter.get("/hello", function(req, res){
    res.json( {
        message : "working of router"
    })
});



module.exports = {
    userRouter : userRouter
}