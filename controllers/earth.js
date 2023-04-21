var earth = require('../models/earth');
// List of all earths
exports.earth_list = function(req, res) {
    res.send('NOT IMPLEMENTED: earth list');
};
// for a specific earth. 
exports.earth_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await earth.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
exports.earth_list = async function(req, res) {

    try{

        theearths = await earth.find();

        res.send(theearths);

    }

    catch(err){

        res.status(500);

        res.send(`{"error": ${err}}`);

    }  

};
// Handle earth create on POST.
exports.earth_create_post = async function(req, res) {
    console.log(req.body)
    let document = new earth();
    document.continents = req.body.continents;
    document.continentnum = req.body.continentnum;
    document.country = req.body.country;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};

// Handle earth delete form on DELETE.
exports.earth_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await earth.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };

//Handle earth update form on PUT
exports.earth_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await earth.findById( req.params.id)
    // Do updates of properties
    if(req.body.earth)
    toUpdate.continents = req.body.continents;
    if(req.body.continentnum) toUpdate.continentnum = req.body.continentnum;
    if(req.body.country) toUpdate.country = req.body.country;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };

// VIEWS
// Handle a show all view

exports.earth_view_all_Page = async function(req, res) {
    try{
        theearths = await earth.find();
        res.render('earth', { title: 'earth Search Results', results: theearths});
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};
// Handle earth delete on DELETE. 
exports.earth_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await earth.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
// Handle a show one view with id specified by query 
exports.earth_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await earth.findById( req.query.id) 
        res.render('earthdetail',  
{ title: 'earth Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for creating a earth. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.earth_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('earthcreate', { title: 'earth Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for updating a earth. 
// query provides the id 
exports.earth_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await earth.findById(req.query.id) 
        res.render('earthupdate', { title: 'earth Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle a delete one view with id from query 
exports.earth_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await earth.findById(req.query.id) 
        res.render('earthdelete', { title: 'earth Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 // for a specific earth.
exports.earth_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await earth.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    // Handle a show one view with id specified by query
exports.earth_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await earth.findById(req.query.id)
    res.render('earthdetail',
    { title: 'earth Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle building the view for creating a earth.
// No body, no in path parameter, no query.
// Does not need to be async
exports.earth_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('earthcreate', { title: 'earth Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle building the view for updating a earth.
// query provides the id
exports.earth_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await earth.findById(req.query.id)
    res.render('earthupdate', { title: 'earth Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle a delete one view with id from query
exports.earth_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await earth.findById(req.query.id)
    res.render('earthdelete', { title: 'earth Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };