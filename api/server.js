const fs = require('fs');

const express = require('express');
const app = express();
app.get('/users', (req, res) => {
    fs.readFile('./test.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

        res.json({users: JSON.parse(data)});
    });
});

app.listen('3123');