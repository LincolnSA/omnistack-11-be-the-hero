const connection = require('../database/connection');

module.exports = {
    async store(req, res) {
        const { id } = req.body;

        //pesquisa pelo id e retorna somente o nome da ong
        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

        //verifica se o dado existe 
        if (!ong) {
            return res.status(400).json({ error: "No ONG found this ID." });
        }

        // a api retorna somente o nome da ong
        return res.json(ong);
    }
}