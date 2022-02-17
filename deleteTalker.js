const { readFile, writeFile } = require('fs/promises');

module.exports = async (req, res, next) => {
    try {
        const { id } = req.params;
        const talkers = await readFile('./talker.json', 'utf-8');
        const parsedTalkers = JSON.parse(talkers);
        const talkerIndex = parsedTalkers.findIndex((talkerId) => talkerId.id === Number(id));
        
        parsedTalkers.splice(talkerIndex, 1);

        await writeFile('./talker.json', JSON.stringify(parsedTalkers));
             return res.status(204).end();
    } catch (error) {
        next(error);
    }
};