

var mysql = require("mysql"); 
var inquirer = require("inquirer"); 
var colors = require('colors'); 
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
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
    .then(function (answers){
        var product;

        for ( var i = 0; i  < res.length;i++){
            if (res[i].product_name === answers.choices){
                product = res[i];
            }
        }
        if(res.stock_quantity < parseInt(answer.units)){
            connection.query("UPDATE products SET ? WHERE ?",
            [{stock_quantity: answers.units},{item_id: choice.ID}],
            function(err){
                console.log("Congrats! Your purchase was made").rainbow;
                start();
            });
            } else {
                console.log("Nope, We do not have enough units to satisfy your order").brRed.black;
                start();
            }
        });
    });
}


    



