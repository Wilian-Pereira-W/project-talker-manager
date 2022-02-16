module.exports = (req, res, next) => {
    try {
        const { email } = req.body; 
        const emailFormat = /\S+@\S+\.\S+/;
        const isValid = emailFormat.test(email);
        if (!email) {
            return res.status(400).json({
                message: 'O campo "email" é obrigatório',
              }); 
        }
        if (!isValid) {
            return res.status(400).json({
                message: 'O "email" deve ter o formato "email@email.com"',
              }); 
        }
        next();
    } catch (error) {
        next(error);
    }
};
