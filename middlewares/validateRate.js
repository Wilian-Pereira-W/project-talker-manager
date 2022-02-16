module.exports = (req, res, next) => {
    try {
        const { talk } = req.body;
        const { rate } = talk;
        const integer = Number.isInteger(rate);
        if (!integer || rate < 1 || rate > 5) {
            return res.status(400).json({
                message: 'O campo "rate" deve ser um inteiro de 1 à 5',
              }); 
        }
        next();
    } catch (error) {
        return res.status(error.status).json({ message: error.message });
    }
};