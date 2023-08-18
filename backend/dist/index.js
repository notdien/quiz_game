"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = require("./db");
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
app.get('/', (req, res) => {
    res.json({ info: "Welcome to the backend......" });
});
// creates a new player with their high score
app.post('/newPlayer', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var { username, score } = req.body;
    const existingUsername = yield (0, db_1.identifyPlayer)(username);
    if (existingUsername) {
        return res.status(400).json({ Message: "Username already exist, please choose a different name." });
    }
    const new_player = yield (0, db_1.addPlayer)(username, score);
    res.status(201).json({ Message: "New player! Nice high score!" });
}));
app.get('/highscores', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield (0, db_1.getScores)();
    return res.status(200).send(results);
}));
app.put('/mydb/:username', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.params.username;
    const { score } = req.body;
    // logic to check if userexists or not
    const existingUsername = yield (0, db_1.identifyPlayer)(username);
    if (existingUsername) {
        yield (0, db_1.updateScore)(score, username);
        return res.status(200).json({ Message: "New score!" });
    }
    else {
        return res.status(400).json({ Message: "That player does not exist!" });
    }
}));
const port = 5678;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
