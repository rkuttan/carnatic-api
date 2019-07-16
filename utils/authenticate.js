const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const CHECK_JWT = jwt({
      secret: jwksRsa.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: 'https://carnatic.auth0.com/.well-known/jwks.json'
    }),
    // TODO: This line needs to be commented out for proper authentication
    //audience: 'https://carnatic-auth',
    issuer: 'https://carnatic.auth0.com/',
    algorithms: ['RS256']
});
module.exports = CHECK_JWT
