const express = require('express');
const router = express.Router()
const bodyParser = require ('body-parser');
const posts = require ('../model/posts');


router.get("/all", (req, res)=>{

    res.json(JSON.stringify(posts.getAll()))

});

router.post("/new", bodyParser.json(), (req,res) =>{
    let tittle = req.body.tittle;
    let description = req.body.description;

    posts.newPostdescription

    res.send("Post adicionado");
})

module.exports = router;