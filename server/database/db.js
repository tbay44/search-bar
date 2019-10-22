const {Pool, Client} = require("pg");
require('locus')

const pool = new Pool({
  user: "student",
  host: "fec-carousel.c2zm8vul16cb.us-east-2.rds.amazonaws.com",
  database:"fec-teabay-carousel",
  password:"HRATX44student",
  port:5432,
})

const client = new Client({
  user: "student",
  host: "fec-carousel.c2zm8vul16cb.us-east-2.rds.amazonaws.com",
  database:"fec-teabay-carousel",
  password:"HRATX44student",
  port:5432,
})


client.connect()
client.query('SELECT * FROM product WHERE id = 1;', (err, res) => {
  console.log(res.rows)
})

function getOptions (currentSearchInput, callback) {
  let queryString = 
  currentSearchInput.category_id === 0 ? 
  `SELECT * FROM product WHERE product_name ~* '^${currentSearchInput.search}.*';`:
  `SELECT * FROM product WHERE category = ${currentSearchInput.category_id} AND product_name ~* '^${currentSearchInput.search}.*';`;

  client.query(queryString, (error, products) => {
    if(error){
      callback(error)
    }else{
      callback(products.rows)
    }
  })
}

function getCategories (callback) {
  let queryString = "SELECT * FROM category;"
  client.query(queryString, (error, categories) => {
    if(error){
      callback(error)
    }else{
      callback(categories.rows)
    }
  })
}

module.exports = {
  getOptions,
  getCategories
}