import Usuario from '../model/usuario.js'

const cadastrarUsuario = async (req,res) => {
    const { userName, senha } = req.body;

    if(!userName || !senha) res.status(400).json({error:'Login e Senha são obrigatórios'});

    try {
        const novoUsuario = new Usuario({userName, senha})
        await novoUsuario.save();
        res.status(200).json({ mensage: 'Usuário cadastrado!' })
    } catch (err) {
        console.error(err.mensage)
        res.status(500).json({ erro: 'Erro ao cadastrar usuário' })
    }
}

export default cadastrarUsuario
