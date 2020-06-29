const router = require("express").Router();
const Workouts = require("../models");

router.get('/workouts', (req,res)=> {
    console.log("getting workouts")
    Workouts.find().then(data=> res.json(data)).catch(err=>console.log(err))
});


module.exports = router;