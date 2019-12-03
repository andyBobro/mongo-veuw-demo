const postRoutes = require('./postRoutes')

module.exports = function (app, db) {
  postRoutes(app, db);
  // ...
}
