const { writeFile, readFile } = require('fs/promises');

module.exports = async (req, res, next) => {
    try {
        const { name, age, talk } = req.body; 
        const { watchedAt, rate } = talk;
        const talkers = await readFile('./talker.json', 'utf-8');

        const parsedTalkers = JSON.parse(talkers);

        const id = parsedTalkers.length + 1;
        const newTalker = { name, age, id, talk: { watchedAt, rate } };
        
        parsedTalkers.push(newTalker);
        await writeFile('./talker.json', JSON.stringify(parsedTalkers));

        return res.status(201).json(newTalker);
    } catch (error) {
        next(error);
    }
};