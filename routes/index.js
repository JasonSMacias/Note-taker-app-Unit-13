const router = require("express").Router();
const apiRoutes = require("./api");
const htmlRoutes = require("./html");

router.use("/", htmlRoutes);
router.use("/api", apiRoutes);


router.get("*", function(req, res) {
  res.send("<h1>404 error</h1>");
});
// router.get("*", function(req, res) {
  
//   res.sendFile(path.join (__dirname, "../public/404.html"));
  
//   });


module.exports = router;