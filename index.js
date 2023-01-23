const express = require('express');
const app = express();
const port = 7000
require('dotenv').config()
require('.db/client')

app.use('/register', require('./routes/registerRoutes'))

app.use(express.json())

app.get('/', (req, res) => {
    res.send('YOYO')
})


// https://drive.google.com/drive/folders/1WsD-wYoxbgNXu2J_gKZM2wUIMpStcuGv
// @26mins 40sec

app.listen(port, console.log('Listening on port ' + port));