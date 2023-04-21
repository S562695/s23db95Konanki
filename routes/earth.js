var express = require('express');
var router = express.Router();
const earth_controlers= require('../controllers/earth');
/* GET home page. */
router.get('/', earth_controlers.earth_view_all_Page);
router.get('/detail', earth_controlers.earth_view_one_Page);
/* GET create earth page */
router.get('/create', earth_controlers.earth_create_Page);
router.get('/update', earth_controlers.earth_update_Page);
router.get('/delete', earth_controlers.earth_delete_Page);
module.exports = router;