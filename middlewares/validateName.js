module.exports = (req, res, next) => {
    try {
        const { name } = req.body;
            if (!name) return res.status(400).json({ message: 'O campo "name" é obrigatório' });
            if (name.length < 3) { 
                return res.status(400).json(
                    { message: 'O "name" deve ter pelo menos 3 caracteres' },
                    ); 
            }
            next();
    } catch (error) {
        return res.status(error.status).json({ message: error.message });
    }
};