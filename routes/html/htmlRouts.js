const router = require("express").Router();
const connection = require("../../db/connection");

// index html at /
router.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// notes.html at /notes

router.get("/notes", function(req, res){
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// other paths get 404 page
router.get("*", function(req, res) {
  res.sendFile(path.join (--__dirname, "../public/404.html"));
});

module.exports = router;