const randToken = require('rand-token');

module.exports = async (_req, res, _next) => {
    const token = randToken.generate(16);
    try {
        return res.status(200).json({ token });
    } catch (error) {
        return res.status(error.status).json({ message: error.message });
    }
};
