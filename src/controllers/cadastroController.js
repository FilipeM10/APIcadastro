import cadastro from '../model/cadastro.js'

export const listar = async (req,res) => {
    try {
        const dados = await cadastro.find()
        res.status(200).json({dados})
    } catch(error) { return res.status(500).json('Erro ao listar', error) }
}
export const procuraPorId = async (req,res) => {
    try {
        const {id} = req.params
        const dados = await cadastro.findById(id)
        if(!dados) return res.status(404).json({ mensage: 'Id não encontrado' });
        return res.status(200).json({dados})
    } catch(error) { return res.status(500).json(error) }
}
export const postar = async (req,res) => {
    try {
        const dados = await cadastro.create(req.body)
        if(!dados) return req.status(404).json({ mensage: 'Adicione os dados necessários' })
        return res.status(200).json({ dados })
    } catch(error) { return req.status(500).json('Erro ao logar', error) }
}
export const deletar = async (req,res) => {
    try{
        const {id} = req.params
        const dados = await cadastro.findByIdAndDelete(id)
        if(!dados) res.status(404).json({ mensage: 'Id não encontrado' });
        return res.status(200).json({dados})
    } catch(error) { return req.status(500).json('Erro ao desinstalar', error) }

}