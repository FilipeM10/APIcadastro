import mongoose from '../config/database.js'

const UsuarioSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        required: true
    },
    senha: {
        type: String,
        required: true
    }
})

export default mongoose.model('Usuario', UsuarioSchema)
