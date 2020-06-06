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

    //URLS
    app.get('/markers', findAllEmbajadas);
}

    module.exports = crudEmbajadas;