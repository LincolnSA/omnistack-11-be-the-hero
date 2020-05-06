const crypto = require("crypto");
const connection = require('../database/connection');

module.exports = {

    //retorna todas as ongs cadastrada
    async index(req, res) {
        const ongs = await connection('ongs').select('*');
        return res.json(ongs);
    },

    //cadastra uma ong
    async store(req, res) {
        const { name, email, whatsapp, city, uf } = req.body;

        //gera id aleatoriamente 
        const id = crypto.randomBytes(4).toString('HEX');

        //insere no banco de dados
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });

        return res.json({ id });
    }
};