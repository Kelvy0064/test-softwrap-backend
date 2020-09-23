const db = require('../database/index')

const UserSchema = new db.Schema({

    name: {
        type: String
    },
    age: {
        type: String
    },
    civilState: {
        type: String
    },
    cpf: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    }
})

const User = db.model('User', UserSchema)
module.exports = User
