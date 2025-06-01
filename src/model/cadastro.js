import mongoose from '../config/database.js'

const CadastroSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        required: true
    },
    gmail: {
        type: String,
        unique: true,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    criadoEm: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('Cadastro', CadastroSchema)
