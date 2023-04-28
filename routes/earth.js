var express = require('express');
const earth_controlers= require('../controllers/earth');
// var earth_controller = require('../controllers/earth'); //added for part 4
var router = express.Router();

// A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    req.session.returnTo = req.originalUrl;
    console.log()
    res.redirect("/login");
}

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('earth', { title: 'Search Results earth' });
// });

/* GET earths */
router.get('/', earth_controlers.earth_view_all_Page );

/* GET detail earth page */ //added for part 4
router.get('/detail', earth_controlers.earth_view_one_Page);

/* GET create earth page */
router.get('/create', secured,earth_controlers.earth_create_Page);

/* GET update earth page */
router.get('/update',secured, earth_controlers.earth_update_Page);

/* GET delete earth page */
router.get('/delete',secured, earth_controlers.earth_delete_Page);


module.exports = router;