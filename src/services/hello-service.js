const log = require('../log');

const greetings = (context) => {
  const { name } = context.body;

  log.info('calling greetings for %s', name);

  return {
    message: `hello ${name}`,
  };
};

module.exports = {
  greetings,
};
