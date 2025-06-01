import cadastro from '../model/cadastro.js'

export const listar = async (req,res) => {
    try {
        const dados = await cadastro.find()
        res.status(200).json({dados})
    } catch(error) { console.log(error) }
}