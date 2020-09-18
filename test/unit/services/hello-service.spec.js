const helloService = require('../../../src/services/hello-service');

describe('hello service', () => {
  const context = {
    body: { name: 'some-name' },
  };

  it('should return greetings', () => {
    const response = helloService.greetings(context);
    response.should.eql({
      message: 'hello some-name',
    });
  });
});
