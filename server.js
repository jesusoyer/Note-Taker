const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');
const fs = require('fs');
const db = require('./db/db.json');



app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.get('/notes', (req,res)=>{
  
 res.sendFile(path.join(__dirname, '/public/notes.html'))
});

app.post('/notes',(req,res)=>{
    
})


app.get('/api/notes', (req, res)=>{
    res.json(db);
    
})
app.post('/api/notes', (req,res)=>{
    let jsonFilePath = path.join(__dirname, "./db/db.json");
    let newNote = req.body;
    console.log(newNote)
    console.log(db)
    
    
    
    

    let id = 1;
    for (let i = 0; i < db.length; i++) {
        let individualNote = db[i];

        if (individualNote.id > id) {
           
            id = individualNote.id;
        }
    }
    
    newNote.id = id + 1;

    db.push(newNote)

    fs.writeFile(jsonFilePath, JSON.stringify(db),(err) =>{

        if (err) {
            return console.log(err);
        }
        console.log("Your note was saved!");
    });
    // Gives back the response, which is the user's new note. 
    res.json(newNote);
});


    
    

    




app.listen(PORT, ()=>{
    console.log(`app listening on port ${PORT}`)
})