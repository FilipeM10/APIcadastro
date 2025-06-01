import index from './index.js'
import mongoose from './config/database.js';

const PORT = process.env.PORT || 3000;

mongoose.connection.once('open', () => {
    index.listen(PORT, () => {
        console.log(`Servidor rodando na porta 127.0.0.1:${PORT}`);
    })
})
mongoose.connection.on('error', (err) => {
    console.log('❌ Não foi possível estabelecer conexão', err)
})
