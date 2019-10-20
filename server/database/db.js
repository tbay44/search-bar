const {Pool, Client} = require("pg");

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
  let queryString = `SELECT * FROM product WHERE product_name ~* '^${currentSearchInput}.*' ; `
  client.query(queryString, (error, products) => {
    if(error){
      callback(error)
    }else{
      callback(null, products.rows)
    }
  })
}

module.exports = {
  getOptions
}