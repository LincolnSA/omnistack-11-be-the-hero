const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        // recebe o id da ong pelo header
        const ong_id = req.headers.authorization;

        //retorna todos os incidents com a ong cadastrada
        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*');

        return res.json(incidents);
    }
};