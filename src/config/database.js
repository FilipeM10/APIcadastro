import mongoose from 'mongoose'

const uri = process.env.MONGODB_URI

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('✅ MongoDB conectado com Sucesso ✅')
}).catch((err) => {
    console.log('❌ erro ao conectar ao MongoDB ❌', err)
}) 

export default mongoose