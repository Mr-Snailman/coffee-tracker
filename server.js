(function() {
  'use strict';

  var express = require('express');
  var exphbs = require('express-handlebars');
  var mongo = require('mongodb');

  var app = express();

  var coffee = {
    name:"",
    time:""
  };

  // Set up templating engine for HTML pages
  app.engine('handlebars', exphbs({defaultLayout: 'main'}));
  app.set('view engine', 'handlebars');

  // Allow our app access to node_modules for bootstrap
  // TODO change this
  app.use(express.static(__dirname + '/.'));

  // Display our home view
  app.get('/', function(req, res) {
    if (req.query.coffee) {
      coffee.name = req.query.coffee;
      coffee.time = new Date().toTimeString();
    }
    res.render('home', coffee);
  });

  app.get('/coffee', function(req, res) {
    res.send(coffee);
  });

  // Start the server
  app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
  });

})();
