import usuario from '../model/usuario.js'

export const listar = async (req,res) => {
    try {
        const dados = await usuario.find()
        res.status(200).json({dados})
    } catch(error) { return res.status(500).json('Erro ao listar', error) }
}
export const procuraPorId = async (req,res) => {
    try {
        const {id} = req.params
        const dados = await usuario.findById(id)
        if(!dados) return res.status(404).json({ mensage: 'Id não encontrado' });
        return res.status(200).json({dados})
    } catch(error) { return res.status(500).json(error) }
}
export const deletar = async (req,res) => {
    try{
        const {id} = req.params
        const dados = await usuario.findByIdAndDelete(id)
        if(!dados) res.status(404).json({ mensage: 'Id não encontrado' });
        return res.status(200).json({dados})
    } catch(error) { return req.status(500).json('Erro ao desinstalar', error) }

}


// temos duas opções, ou criamos um crud para PUSH ou vamos direto em direção ao front, você decide
