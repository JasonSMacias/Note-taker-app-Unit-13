const router = require("express").Router();
const path = require("path");

// index html at /
router
  .route("/")
  .get(function(req, res){
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

// notes.html at /notes

router
  .route("/notes")
  .get(function(req, res){
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

// other paths get 404 page
// router.get("*", function(req, res) {
  //couldn't get this 404 page to work for some reason
  // res.sendFile(path.join (__dirname, "../../public/404.html"));
  // res.sendFile(path.join(__dirname, "../public/donations.html"));
// });

module.exports = router;