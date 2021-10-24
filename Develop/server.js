const express = require('express')
const app = express()

const PORT = process.env.PORT || 3003

const path = require('path');
const fs = require('fs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

const {notes} = require('./db/db.json')

const createNewNote = function(body, notes) {
    const note = body;
    notes.note;
    fs.writeFileSync(
      path.join(__dirname, '../data/notes.json'),
      JSON.stringify({ notes }, null, 2)
    );
    return note;
  }
app.get('/api/notes', (req, res) => {
    console.log(notes)
    return res.json(notes)
})

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
})

app.post('/notes', (req, res) => {

    // req.body.id = notes.length.toString();
    const note = createNewNote(req.body, notes);
    res.json(note);
    // res.sendFile(path.join(__dirname, './public/notes.html'))
})

app.delete('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

app.listen(PORT, () => {
    console.log(`API server running on port: ${PORT}`)
})