'use strict';


/**
 * Adicionar Pedido
 * Adiciona uma Pedido ao sistema
 *
 **/
exports.addPedido = function (Pedido) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}


/**
 * Deletar uma Pedido
 *
 * idPedido String idPedido a ser excluido
 * no response value expected for this operation
 **/
exports.deletePedido = function (idPedido) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}


/**
 * Atualiza uma Pedido
 *
 * body Pedido Pedido que precisa ser atualizado
 * no response value expected for this operation
 **/
exports.updatePedido = function (body) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}


/**
 * Lista de Pedidos
 * Esse método retorna uma lista de Pedidos
 *
 * pular Integer número de registros para pular para paginação (optional)
 * limit Integer número máximo de registros para retornar (optional)
 * returns List
 **/
exports.PedidoGET = function (pular, limit) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = [{
      "idCategoria": 1,
      "descricao": "Pedido 1"
    }, {
      "idCategoria": 2,
      "descricao": "Pedido 2"
    }];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

