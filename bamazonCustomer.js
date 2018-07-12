

var mysql = require("mysql"); 
var inquirer = require("inquirer"); 
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "products_db"
  

});

connection.connect(function(err){
    if(err) throw err;

    console.log("Connected to the server with ID " + connection.threadId)
start();
});
console.log('======================         Welcome to BAMAZON                     ============================='.rainbow);
function start(){
    var query = "SELECT * FROM products";
   results =  connection.query(query,  function(err, res) {
       if(err) throw err;
        
        inquirer
    .prompt([
    {
        name: "product",
        type: "input",
        message: "Please enter ID of iteam you would wish to purchase",
        choices: function (){
            var choice = [];
            for (var i = 0;  i <  res.length; i++ ) {
                console.log("ID: " + res[i].item_id + " || Product: " + res[i].product_name.blue + " || Price " + res[i].price);
            }
            return choice;
        }
    },
    {
        name: "units",
        type: "input",
        message: "Please enter a how many units you would like to purchase",
    }
    ])
    .then(function (answer){
        var quantity = answer.units;
        var item = answer.product;
        
        var queryStr = 'SELECT * FROM products WHERE ?';

        connection.query(queryStr, {item_id: item}, function(err, data){
            if (err) throw err; 

            if (data.length === 0) {
				console.log('ERROR: Invalid Item ID. Please select a valid Item ID.');
				start();

			} else {

            var productData = data[0];

            if (quantity <= productData.stock_quantity) {
                console.log("Congrats! Your purchase of was made");
                start();
                var updateQueryStr = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;
                connection.query(updateQueryStr, function(err, data) {
                    if (err) throw err;

                    console.log('Your oder has been placed! Your total is $' + productData.price * quantity);
                    connection.end();
                })
            } else {
                console.log("Nope, We do not have enough units to satisfy your order");
                start();
            }
       
        
        }
    });
        });
    
    })

   };





    



