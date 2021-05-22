const express = require('express');
const app = express()

const path = require('path');
PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true })); // Sets up data parsing
app.use(express.json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));
app.get('/reservations', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));
app.get('/view-Tables', (req, res) => res.sendFile(path.join(__dirname, 'table.html')))
  
  
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
});

app.get('/api', (req, res) => res.json(reservations));
app.get('/api/Table-reservation', (req, res) => res.json());

let reservations = [];

//posting
app.post('/api', (req, res) => {
    let data = req.body;
    console.log(data);

    reservations.push(data);
});

