const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'dragonpower!SQL',
      database: 'election'
    },
    console.log('Connected to the election database.')
);

//return data from candidates table
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

//default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

//funciton to start express server on port 3001
app.listen(PORT, () => {
    console.log(`Server runnong on port ${PORT}`);
});