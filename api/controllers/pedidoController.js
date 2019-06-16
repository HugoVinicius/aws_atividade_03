var utils = require('../utils/writer.js');
var Pedido = require('../service/PedidosService');

exports.get = (req, res, next) => {
    
    Pedido.PedidoGET()
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

exports.getById = (req, res, next) => {
    res.status(200).send('Requisição [Gestão de Pedido] GET recebida com sucesso!');
};

exports.post = (req, res, next) => {
    res.status(201).send('Requisição [Gestão de Pedido] POST recebida com sucesso!');
};

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(204).send(`Requisição [Gestão de Pedido] PUT recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(204).send(`Requisição [Gestão de Pedido] DELETE recebida com sucesso! ${id}`);
};