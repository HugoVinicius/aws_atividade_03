var utils = require('../utils/writer.js');
var Pagamento = require('../service/PagamentoService');

exports.get = (req, res, next) => {
    Pagamento.PagamentoGET()
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

exports.post = (req, res, next) => {
    res.status(201).send('Requisição [Pagamento de Produto] POST recebida com sucesso! - Realiza Pagamento');
};

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(204).send(`Requisição [Pagamento de Produto] PUT recebida com sucesso! ${id} - Altera Pagamento`);
};