const express = require('express');
const path = require('path')
const app = express();
const port = process.env.PORT || 3000;
const connection = require("./database/db");
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html')
const mockResponse = {
    foo: 'bar',
    bar: 'foo'
};


app.use(express.static(DIST_DIR));


app.get('/api', (req, res) => {
    connection.getAllProducts((error, allProducts) => {
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