const helloService = require('../services/hello-service');

const greetings = (req, res) => {
  const response = helloService.greetings(req);
  res.json(response);
};

module.exports = {
  greetings,
};
