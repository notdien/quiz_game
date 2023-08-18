import express, { Express, Request, Response } from 'express';
import bodyParser, { json } from 'body-parser';
import { getScores, addPlayer, identifyPlayer, updateScore } from './db';
import { answerQuestion } from './quiz';

const app: Express = express();
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (req: Request, res: Response) => {
    res.json({ info: "Welcome to the backend......"})
})

// creates a new player with their high score
app.post('/newPlayer', async(req: Request, res: Response) => {
    var {username, score} = req.body;

    const existingUsername = await identifyPlayer(username);
    if(existingUsername) {
        return res.status(400).json({ Message: "Username already exist, please choose a different name."})
    }

    const new_player = await addPlayer(username, score);
    res.status(201).json({ Message: "New player! Nice high score!"})
})

app.get('/highscores', async(req: Request, res: Response) => {
    const results = await getScores();
    return res.status(200).send(results);
})

app.put('/mydb/:username', async(req: Request, res: Response) => {
    const username = req.params.username;
    const {score} = req.body

    // logic to check if userexists or not
    const existingUsername = await identifyPlayer(username);
    if(existingUsername) {
        await updateScore(score, username);
        return res.status(200).json({ Message: "New score!" });
    }
    else {
        return res.status(400).json({ Message: "That player does not exist!" })
    }
})

const port = 5678;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

