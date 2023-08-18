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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateScore = exports.identifyPlayer = exports.addPlayer = exports.getScores = void 0;
const configDB_1 = require("./configDB");
// gets all user scores
const getScores = function () {
    return __awaiter(this, void 0, void 0, function* () {
        let query = 'SELECT * FROM highscores ORDER BY id ASC';
        try {
            const result = yield configDB_1.pool.query(query);
            console.log(result.rows);
            return (result.rows);
        }
        catch (error) {
            if (error) {
                throw error;
            }
        }
    });
};
exports.getScores = getScores;
// getUsers();
// adds a new high score
const addPlayer = function (username, score) {
    return __awaiter(this, void 0, void 0, function* () {
        let query = 'INSERT INTO highscores (username, score) VALUES ($1, $2) RETURNING *';
        try {
            const values = [username, score];
            const res = yield configDB_1.pool.query(query, values);
            console.log("Inserted: " + res.rows[0]);
        }
        catch (error) {
            if (error) {
                throw error;
            }
        }
    });
};
exports.addPlayer = addPlayer;
// addPlayer('John', 100);
// finds a username
const identifyPlayer = function (username) {
    return __awaiter(this, void 0, void 0, function* () {
        let query = 'SELECT * FROM highscores WHERE username = $1';
        try {
            const values = [username];
            const res = yield configDB_1.pool.query(query, values);
            return (res.rows[0]);
        }
        catch (error) {
            if (error) {
                throw error;
            }
        }
    });
};
exports.identifyPlayer = identifyPlayer;
// identifyPlayer('Dien');
// updates a score
const updateScore = function (score, username) {
    return __awaiter(this, void 0, void 0, function* () {
        let query = 'UPDATE highscores SET score = $1 WHERE username = $2';
        try {
            const values = [score, username];
            const res = yield configDB_1.pool.query(query, values);
            return ('Updated score!');
        }
        catch (error) {
            if (error) {
                throw error;
            }
        }
    });
};
exports.updateScore = updateScore;
// updateScore(200, 'John')
