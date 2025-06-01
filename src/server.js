import index from './index.js'

const PORT = process.env.PORT

index.listen(PORT || 3000, () => {
    console.log('Servidor rodando')
})
