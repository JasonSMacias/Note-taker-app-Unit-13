const router = require("express").Router();
const apiRoutes = require("./api");
const htmlRoutes = require("./html");

router.use("/", htmlRoutes);
router.use("/api", apiRoutes);

router.get("*", function(req, res) {
  res.send("<h1>404 error</h1>");
});

module.exports = router;