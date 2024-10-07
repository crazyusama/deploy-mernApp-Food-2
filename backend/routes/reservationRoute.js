const express = require("express")
const reservation = require("../controller/reservation")
const router = express.Router()

router.post('/reservation',reservation)

module.exports = router