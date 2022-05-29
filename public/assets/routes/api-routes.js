const express = require('express');
const router = express.Router('../db/router');



app.get('/api/notes', (req, res)=>{
    res.json(db);
    
})
app.post('/api/notes', (req,res)=>{
    console.log(req.body.title);
    console.log(req.body.text)
    
    
    
    db.push(req.body)
    response.send(201)
    

    
})