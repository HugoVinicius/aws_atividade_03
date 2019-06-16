'use strict';

/**
 * Realiza um pagamento no sistema
 * Adiciona uma Pagamento ao sistema
 *
 **/
exports.addPagamento = function (Pagamento) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}

/**
 * Atualiza uma Pagamento
 *
 * body Pagamento Pagamento que precisa ser atualizado
 * no response value expected for this operation
 **/
exports.updatePagamento = function (body) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}

/**
 * Lista de Pagamentos
 * Esse método retorna uma lista de Pagamentos
 *
 * pular Integer número de registros para pular para paginação (optional)
 * limit Integer número máximo de registros para retornar (optional)
 * returns List
 **/
exports.PagamentoGET = function () {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = [{
      "idCategoria": 1,
      "descricao": "Pagamento 1"
    }, {
      "idCategoria": 2,
      "descricao": "Pagamento 2"
    }];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

