'use strict';


/**
 * Adicionar Catalogos
 * Adiciona um item ao sistema
 **/
exports.addCatalogos = function () {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}

/**
 * Adicionar Catalogos
 * Adiciona um item ao sistema
 **/
exports.addCatalogos = function () {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}


/**
 * Deletar Catalogos
 *
 **/
exports.deleteOrder = function () {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}


/**
 * Atualiza um Catalogos
 *
 * body Catalogos Catalogos que precisa ser atualizado
 * no response value expected for this operation
 **/
exports.updateCatalogos = function (body) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}

/**
 * Lista de Catalogos
 * Esse método retorna uma lista de Catalogos
 * returns List
 **/
exports.CatalogosGET = function () {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = [{
      "idCategoria": 1,
      "descricao": "Alimentação"
    }, {
      "idCategoria": 2,
      "descricao": "Infantil"
    }, {
      "idCategoria": 3,
      "descricao": "Pereciveis"
    }];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

