const validadeRate = require('../helpers/validateRate');

module.exports = (req, res, next) => {
    try {
        const { talk } = req.body;
        const { rate } = talk;
        if (rate === undefined) {
            return res.status(400).json({
                message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
              }); 
        }
        if (validadeRate(rate)) {
            return res.status(400).json({
                message: 'O campo "rate" deve ser um inteiro de 1 à 5',
              }); 
        }
        next();
    } catch (error) {
        next(error);
    }
};