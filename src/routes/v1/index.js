const express = require('express');

const { InfoController } = require('../../controllers');

const airplaneRoutes = require('./airplane-routes');
const CityRoutes=require("./city-routes")

const router = express.Router();

router.use('/airplanes', airplaneRoutes);

//for ccities

router.use("/cities",CityRoutes)


router.get('/info', InfoController.info);


module.exports = router;