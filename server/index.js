const express = require('express');
const path = require('path')
const app = express();
const port = 3009;
const connection = require("./database/db");
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html')
const bodyParser = require('body-parser');
const mockResponse = {
    foo: 'bar',
    bar: 'foo'
};
require('locus')

// app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(DIST_DIR));


app.post('/api', (req, res) => {
    let lowerId = parseInt(req.body.id) - 7;
    let upperId = parseInt(req.body.id) + 7;
    connection.getRangeProducts(lowerId, upperId, (error, allProducts) => {
        if(error) {
            res.send(error)
        }else{
            res.send(allProducts)
        }
    })
})

app.get('/api/add', (req, res) => {
    let lowerId = parseInt(req.query.id) - 1;
    let upperId = parseInt(req.query.id) + 1;
    connection.getRangeProducts(lowerId, upperId, (error, allProducts) => {
        if(error) {
            res.send(error)
        }else{
            res.send(allProducts)
        }
    })
})

app.get('/', (req, res) =>{
    res.send(HTML_FILE);
});
app.listen(port, function () {
    console.log('App listening on port: ' + port);
});