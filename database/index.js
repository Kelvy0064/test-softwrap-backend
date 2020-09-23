const db = require('mongoose')

db.connect('mongodb://localhost/softwrap', { useNewUrlParser: true, useUnifiedTopology: true })
db.Promise = global.Promise

module.exports = db
