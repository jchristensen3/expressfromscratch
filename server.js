const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');


app.use(bodyParser.urlencoded({ extended: false }));
app.use('/users', routes.users);



app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.use(express.static('public'));

app.listen(3000, (req, res) => {
    console.log("Up and listening on port 3000!");
})