var utils = require('../utils/writer.js');
var Catalogos = require('../service/CatalogosService');

exports.get = (req, res, next) => {
    Catalogos.CatalogosGET()
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

exports.getById = (req, res, next) => {
    res.status(200).send('Requisição [Catalogo de Produto] GET recebida com sucesso!');
};

exports.post = (req, res, next) => {
    res.status(201).send('Requisição [Catalogo de Produto] POST recebida com sucesso!');
};

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(204).send(`Requisição [Catalogo de Produto] PUT recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(204).send(`Requisição [Catalogo de Produto] DELETE recebida com sucesso! ${id}`);
};