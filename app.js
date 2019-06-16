'use strict';

var SwaggerExpress = require('swagger-express-mw');
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var SwaggerUi = require('swagger-tools/middleware/swagger-ui');

module.exports = app; // for testing

const router = express.Router();

//Rotas
const index = require('./api/routes/index');
const pagamentoRoute = require('./api/routes/pagamentoRoute');
const pedidoRoute = require('./api/routes/pedidoRoute');
const catalogoRoute = require('./api/routes/catalogoRoute');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', index);
app.use('/pagamento', pagamentoRoute);
app.use('/pedido', pedidoRoute);
app.use('/catalogo', catalogoRoute);

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function (err, swaggerExpress) {
  if (err) { throw err; }

  app.use(SwaggerUi(swaggerExpress.runner.swagger));

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 3000;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/docs/');
  }
});

