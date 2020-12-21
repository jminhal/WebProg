var express = require('express');
var router = express.Router();
var unitsModel = require('../Models/unitsModel');

router.get('/', async function(req, res, next) {
  let units = await unitsModel.getAllUnits();
  res.send(units);
});

module.exports = router;