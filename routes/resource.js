var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var earth_controller = require('../controllers/earth');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// earth ROUTES ///
// POST request for creating a earth.
router.post('/earth', earth_controller.earth_create_post);
// DELETE request to delete earth.
router.delete('/earth/:id', earth_controller.earth_delete);
// PUT request to update earth.
router.put('/earth/:id', earth_controller.earth_update_put);
// GET request for one earth.
router.get('/earth/:id', earth_controller.earth_detail);
// GET request for list of all earth items.
router.get('/earth', earth_controller.earth_list);
module.exports = router;