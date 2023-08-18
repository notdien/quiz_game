import { pool } from './configDB';

// gets all user scores
export const getScores = async function() {
    let query = 'SELECT * FROM highscores ORDER BY id ASC'
    try {
        const result = await pool.query(query)
        console.log(result.rows)
        return (result.rows)
    } catch (error) {
        if (error) {
            throw error;
        }
    }
}

// getUsers();

// adds a new high score
export const addPlayer = async function(username: string, score: number) {
    let query = 'INSERT INTO highscores (username, score) VALUES ($1, $2) RETURNING *'
    try {
        const values = [username, score]
        const res = await pool.query(query, values)
        console.log("Inserted: " + res.rows[0])
    } catch (error) {
        if (error) {
            throw error;
        }
    }
}

// addPlayer('John', 100);

// finds a username
export const identifyPlayer = async function(username: string) {
    let query = 'SELECT * FROM highscores WHERE username = $1'
    try {
        const values = [username]
        const res = await pool.query(query, values)
        return(res.rows[0])
    } catch (error) {
        if (error) {
            throw error;
        }
    }
}

// identifyPlayer('Dien');

// updates a score
export const updateScore = async function(score: number, username: string) {
    let query = 'UPDATE highscores SET score = $1 WHERE username = $2'
    try {
        const values = [score, username]
        const res = await pool.query(query, values)
        return ('Updated score!')
    } catch (error) {
        if (error) {
            throw error;
        }
    }
}

// updateScore(200, 'John')