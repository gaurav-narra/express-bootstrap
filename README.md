### Express API - bootstrap code

We spend a lot of time in bootstraping an application, this repo should help in having adding the basic skeleton to the appliction.

It use the following:
- [Express](https://github.com/expressjs/express) for server
- [Pino](https://github.com/pinojs/pino) for logging
- [Eslint](https://github.com/eslint/eslint) with airbnb-base for linting
- [Mocha](https://github.com/mochajs/mocha), [Should](https://github.com/shouldjs/should.js) for testing
- [Supertest](https://github.com/visionmedia/supertest) for integration testing

Testing:
```
npm run test:watch -- while developing
npm run test
```

Linting:
```
npm run lint -- checking the lint
npm run lint:fix -- for fixing the lint
```

####TODO
[x] Use latest node and upgrade libraries