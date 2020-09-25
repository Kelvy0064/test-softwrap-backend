const db = require('mongoose')

db.connect('mongodb+srv://kas0627:kas0627@cluster0.hx5wv.mongodb.net/softwrap?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
db.Promise = global.Promise

module.exports = db
