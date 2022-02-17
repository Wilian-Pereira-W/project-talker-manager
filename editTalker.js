const { readFile, writeFile } = require('fs/promises');

module.exports = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { talk, name, age } = req.body;
        const { watchedAt, rate } = talk;
        const talkers = await readFile('./talker.json', 'utf-8');
        const newTalker = { name, age, id: Number(id), talk: { watchedAt, rate } };
        const parsedTalkers = JSON.parse(talkers);
        const talkerIndex = parsedTalkers.findIndex((talkerId) => talkerId.id === Number(id));
        parsedTalkers[talkerIndex] = newTalker;
        await writeFile('./talker.json', JSON.stringify(parsedTalkers));
             return res.status(200).json(newTalker);
    } catch (error) {
        next(error);
    }
};