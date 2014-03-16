'use strict';

var api = require('./controllers/api'),
    subjects = require('./controllers/admin/subjects'),
    index = require('./controllers');

var valid = require('./controllers/valid');




module.exports = function (app) {

    // Server API Routes
    app.get('/api/awesomeThings', api.awesomeThings);
    app.post('/subjects/add', subjects.addSubject);


    //app.post('/api/addSubject', api.addSubject);

    // All undefined api routes should return a 404
    app.get('/api/*', function (req, res) {
        res.send(404);
    });

    // All other routes to use Angular routing in app/scripts/app.js
    app.get('/partials/*', index.partials);
    app.get('/*', index.index);
};