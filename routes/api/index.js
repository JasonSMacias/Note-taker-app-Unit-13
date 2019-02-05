const router = require("express").Router();
const apiRoutes = require("./apiRoutes.js");

router.use("/notes", apiRoutes);

module.exports = router;