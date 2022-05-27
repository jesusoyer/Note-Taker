const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');
const fs = require('fs');
const db = require('./db/db.json');
const { response } = require('express');


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.get('/notes', (req,res)=>{
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

app.get('/api/notes', (req, res)=>{
    res.json(db);
    
})
app.post('/api/notes', (req,res)=>{
    console.log(req.body.title);
    console.log(req.body.text)
    
    
    
    db.push(req.body)
    response.send(201)
    

    
})




app.listen(PORT, ()=>{
    console.log(`app listening on port ${PORT}`)
})