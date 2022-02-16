const randToken = require('rand-token');

module.exports = async (_req, res, next) => {
    const token = randToken.generate(16);
    try {
        return res.status(200).json({ token });
    } catch (error) {
        next(error);
    }
};
