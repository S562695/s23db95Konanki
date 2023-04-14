var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var earth_controller = require('../controllers/earth');
// A little function to check if we have an authorized user and continue on 


 
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// earth ROUTES ///
// POST request for creating a earth.  
router.post('/earths', earth_controller.earth_create_post);
// DELETE request to delete earth.
router.delete('/earths/:id', earth_controller.earth_delete);
// PUT request to update earth.
router.put('/earths/:id', earth_controller.earth_update_put);
// GET request for one earth.
router.get('/earths/:id', earth_controller.earth_detail);
// GET request for list of all earth items.
router.get('/earths', earth_controller.earth_list);
// GET request for one earth. 
router.get('/earths/:id', earth_controller.earth_detail);
module.exports = router;
