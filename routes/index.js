const express = require("express");
const router = express.Router();

// Home page route
router.get("/", function (req, res) {
  res.send("Kevin Espinoza Reyes");
});

router.use('/', require('./swagger'));
router.use('/contacts', require('./contacts'));

module.exports = router;