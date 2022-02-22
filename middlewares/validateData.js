module.exports = (req, res, next) => {
    try {
        const { talk } = req.body;
        const { watchedAt } = talk;
        const dataFormat = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
        const isValid = dataFormat.test(watchedAt);
        if (!watchedAt) {
            return res.status(400).json({
                message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
              }); 
        }
        if (!isValid) {
            return res.status(400).json({
                message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
              }); 
        } next();
    } catch (error) {
        next(error);
    }
};

// referência do regex = https://www.regextester.com/99555
