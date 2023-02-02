const express = require("express");
const router = express.Router();


// Home page route
router.get("/", function (req, res) {
  res.send("Kevin Espinoza");
});

router.use('/', require('./swagger'));
router.use('/user', require('./user'));

module.exports = router;