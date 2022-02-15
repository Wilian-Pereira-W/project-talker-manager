const { readFile } = require('fs/promises');

module.exports = async (req, res, _next) => {
    const { id } = req.params;
    try {
        const speaker = await readFile('./talker.json', 'utf-8');

        const parsedSpeaker = JSON.parse(speaker);

        const talker = parsedSpeaker.find((talkers) => talkers.id === Number(id));
        
        if (!talker) {
 return res.status(404).json({
            message: 'Pessoa palestrante não encontrada',
          }); 
}

        return res.status(200).json(talker);
    } catch (error) {
        return console.log(error);
    }
};