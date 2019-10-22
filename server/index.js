const express = require('express');
const path = require('path')
const app = express();
const port = 3042;
const cors = require('cors')
const connection = require("./database/db");
const SEARCH_BAR_DIST_DIR = path.join(__dirname, '../searchbar-dist');
const SEARCH_BAR_HTML_FILE = path.join(SEARCH_BAR_DIST_DIR, 'index.html')
const bodyParser = require('body-parser');
const mockResponse = {
    foo: 'bar',
    bar: 'foo'
};

// app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use(bodyParser.json())
app.use(express.static(SEARCH_BAR_DIST_DIR));


app.get('/', (req, res) =>{
    res.send(SEARCH_BAR_HTML_FILE);
});

app.post('/autocomplete', (req, res) => {
    connection.getOptions(req.body, (products) => {
        res.send(products)
    })
})

app.get('/categories', (req, res) =>
    connection.getCategories((categories) => {
        res.send(categories)
    }))
app.listen(port, function () {
    console.log('App listening on port: ' + port);
});