const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const {engine}  = require('express-handlebars');
const { Dirent } = require('fs');
const port = 3000;

// HTTP Logger
app.use(morgan('combined'));

// template engine
app.engine('.hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, './resources/views'));
//app.set('views', './resources/views');

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})