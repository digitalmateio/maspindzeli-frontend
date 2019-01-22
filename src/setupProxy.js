const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/users', { target: 'http://localhost:5000' }))
  app.use(proxy('/users/*', { target: 'http://localhost:5000' }))
  // app.use(proxy('/test', { target: 'http://localhost:5000' }))
  // app.use(proxy('/dashboard', { target: 'http://localhost:5000' }))
}
