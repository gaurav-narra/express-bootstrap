const helloController = require('./controllers/hello-controller');

module.exports = (expressRouter) => {
  expressRouter.post('/greetings', helloController.greetings);

  return expressRouter;
};
