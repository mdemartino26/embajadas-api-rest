const crudEmbajadas = (app) => {
    const Embajada = require('../models/embajadas.js');

    //Funciones de endpoints
    //GET - Devuelve todas las embajadas
    findAllEmbajadas = (req, res) => {
        Embajada.find((err, markers) => {
            if (!err) {
                console.log('GET /markers');
                res.send(markers);
            }
        })
    }

    //POST - Insert a new register in the DB
    addEmbajada = function (req, res) {
        console.log('POST');
        console.log(req.body);
        var embajada = new Embajada({
            lat: req.body.lat,
            lng: req.body.lng,
            name: req.body.name,
            description: req.body.description,
            type: req.body.type
        });
        embajada.save(function (err) {
            if (!err) {
                console.log('Created',req.body);
            } else {
                console.log('ERROR: ' + err);
            }
        });
        res.send(embajada);
    };

    //PUT - Update a register already exists in the DB
    modificarEmbajada = function (req, res) {
        Embajada.findById(req.params.id, function (err, embajada) {
            embajada.lat = req.body.lat;
            embajada.lng = req.body.lng;
            embajada.name = req.body.name;
            embajada.description = req.body.description;
            embajada.type = req.body.type;
            embajada.save(function (err) {
                if (!err) {
                    console.log('Updated',req.body);
                } else {
                    console.log('ERROR: ' + err);
                }
                res.send(embajada);
            });
        });
    }

    //DELETE - Delete a register with specified ID
    deleteEmbajada = function (req, res) {
        Embajada.findById(req.params.id, function (err, embajada) {
            embajada.remove(function (err) {
                if (!err) {
                    console.log('Removed',req.body);
                } else {
                    console.log('ERROR: ' + err);
                }
                res.send(embajada);
            })
        });
    }

    //URLS
    app.get('/markers', findAllEmbajadas);
    app.post('/markers', addEmbajada);
    app.put('/markers/:id', modificarEmbajada);
    app.delete('/markers/:id', deleteEmbajada);
}

    module.exports = crudEmbajadas;