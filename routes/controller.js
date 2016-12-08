
module.exports = function(app) {

  var InfoSchemes = require('../model/models.js');

  
  findAllVisits = function(req, res) {
    InfoSchemes.find(function(err, tvshows) {
      if(!err) {
        console.log('GET /invitados')
        res.send(tvshows);
      } else {
        console.log('ERROR: ' + err);
      }
    });
  };



  //POST - Insert a new in the DB
  addVisit = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var information = new InfoSchemes({
      nombre:    req.body.nombre,
      apellidos:    req.body.apellidos,
      comentarios:  req.body.comentarios 
    });

    information.save(function(err) {
      if(!err) {
        console.log('Created');
      } else {
        console.log('ERROR: ' + err);
      }
    });

    res.send(information);
  };

  

  //Link routes and functions
  app.get('/invitados', findAllVisits);
  app.post('/invitados', addVisit);

}