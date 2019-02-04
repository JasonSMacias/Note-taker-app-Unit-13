const router = require("express").Router();
const connection = require("../db/connection");

// get all notes
router.get("/api/notes", function(req, res) {
  connection.query("SELECT * FROM notes", function(err, dbNotes) {
    res.json(dbNotes);
  });
});

// save a new note from req.body
router.post("/api/notes", function(req,res) {
  
});