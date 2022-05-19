const express = require('express');
const app = express();

const mysql = require('mysql');

require('dotenv').config();

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE;
const DB_PORT = process.env.DB_PORT;


const db = mysql.createPool({
    connectionLimit: 100,
    host: DB_HOST,
    user : DB_USER,
    password : DB_PASSWORD,
    database : DB_DATABASE,
    port: DB_PORT
});

db.getConnection((err, connection) => {
    if(err) throw err;
    console.log('connected to database');
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('listening on port ' + port);
});

// Route create user
const bcrypt = require('bcrypt');

app.use(express.json())
//req.body <params>

//CREATE USER
app.post("/createUser", async (req,res) =>{
    const user = req.body.name;
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    db.getConnection(async (err, connection) => {
        if (err) throw err;

        const sqlSearch = "SELECT * FROM accounts WHERE username = ?";
        const search_query = mysql.format(sqlSearch, [user]);

        const sqlInsert = "INSERT INTO accounts (id, username, password) VALUES (0,?, ?)";
        const insert_query = mysql.format(sqlInsert, [user, hashedPassword]);

        await connection.query( search_query, async (err, result) => {
            if (err) throw err;
            console.log("----> Search Results");
            console.log(result.length);

            if(result.length != 0){
                connection.release();
                console.log("----> User already exists");
                res.sendStatus(409)
            }
            else{
                await connection.query(insert_query, async (err, result) => {
                    connection.release();

                    if(err) throw err;
                    console.log("----> User created");
                    console.log(result.insertId);
                    res.sendStatus(201);
                })
            }
        })
    })
})

// Login
app.post("/login", async (req,res) => {
    const user = req.body.name;
    const password = req.body.password;

    let sqllook = "SELECT (password) FROM accounts WHERE username = ?";
    let sqlquery = mysql.format(sqllook, [user]);

    await db.getConnection(async (err, connection) => {
        if (err) throw err;

        await connection.query(sqlquery, async (err, result) => {
            if (err) throw err;
            console.log("----> Search Results");
            console.log(result.length);

            if(result.length == 0){
                connection.release();
                console.log("----> User not found");
                res.sendStatus(404);
            }
            else{
                const hashedPassword = result[0].password;

                const isMatch = await bcrypt.compare(password, hashedPassword);

                if(isMatch){
                    connection.release();
                    console.log("----> User found");
                    res.sendStatus(200);
                }
                else{
                    connection.release();
                    console.log("----> Password incorrect");
                    res.sendStatus(401);
                }
            }
        })
    })
})