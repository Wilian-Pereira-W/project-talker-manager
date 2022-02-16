const { readFile } = require('fs/promises');

module.exports = async (_req, res, next) => {
    try {
        const speaker = await readFile('./talker.json', 'utf-8');

        const parsedSpeaker = JSON.parse(speaker);

        return res.status(200).json(parsedSpeaker);
    } catch (error) {
        next(error);
    }
};