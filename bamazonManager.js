var mysql = require("mysql");
var inquirer = require("inquirer");

// Create connection for SQL database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port
    port: 8889,

    // Your username
    user: "root",

    // Your password
    password: "root",

    database: "bamazon"
})

// Function to display main menu
var mainMenu = function () {
    inquirer.prompt([{

        // Create a list of menu options for manager to select from
        // View Products for Sale, View Low Inventory, Add to Inventory, Add New Product, Exit
        name: "menuOptions",
        type: "list",
        message: "What would you like to do?",
        choices: ["View Products for Sale",
            "View Items with Low Inventory",
            "Add Inventory to an Item",
            "Add a new Product",
            "Exit"
        ]
    }])
        .then(function (answer) {
            console.log(answer);

            // answer from inquirer prompt
            switch (answer.menuOptions) {

                case "View Products for Sale":
                    displayProducts();
                    break;

                case "View Items with Low Inventory":
                    lowInventory();
                    break;

                case "Add Inventory to an Item":
                    addInventory();
                    break;

                case "Add a new Product":
                    addNewProduct();
                    break;

                case "Exit":
                    process.exit();
            }
        })
}

mainMenu();

// Function to display all products available for sale
var displayProducts = function () {

    console.log("Available Products for Sale: \n");

    connection.query("SELECT * FROM products", function (error, response) {
        if (error) throw error;

        // If a manager selects`View Products for Sale`, the app should list every available item: the item IDs, names, prices, and quantities.
        console.log("Item ID\t", "Product Name\t", "Price\t", "Quantity\t")
        console.log("---------------------------------------------------------------------------");

        for (var i = 0; i < response.length; i++) {
            console.log(response[i].item_id + "\t" + response[i].product_name + "\t" + response[i].price + "\t" + response[i].stock_quantity + "\t" + "\n");
        }

        console.log("--------------------------------------------------------------------------");

        mainMenu();
    })
}

// If a manager selects`View Low Inventory`, then it should list all items with an inventory count lower than five.
// To do: list items with inventory count lower than five
var lowInventory = function () {

    console.log("Below are the list of product(s) with low inventory: \n");

    displayProducts();
}

// If a manager selects`Add New Product`, it should allow the manager to add a completely new product to the store.
// Function to add new product item(s) to store
var addNewProduct = function () {
    // Prompt manager for product name, department name, price, and quantity to be added
    inquirer.prompt([
        {
            name: "productName",
            type: "input",
            message: "What is the product name you would like to add in the store?"
        },
        {
            name: "departmentName",
            type: "input",
            message: "What is the department name?"
        },
        {
            name: "unitPrice",
            type: "input",
            message: "What is the unit price?"
        },
        {
            name: "stockQuantity",
            type: "input",
            message: "What is the quantity available for sale?",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        }
    ])
        .then(function (answer) {
            // After prompt is done, insert new product to database with information manager entered
            connection.query("INSERT INTO products SET ?",
                {
                    product_name: answer.productName,
                    department_name: answer.departmentName,
                    price: answer.unitPrice,
                    stock_quantity: answer.stockQuantity
                },
                function (error) {
                    if (error) throw (error)
                    console.log("\n Your new product has been added succesfully! \n");

                    displayProducts();
                }
            )
        });
}

// If a manager selects`Add to Inventory`, your app should display a prompt that will let the manager "add more" of any item currently in the store.
var addInventory = function () {
    // Prompt manager to add quantity to existing item
    inquirer.prompt([
        {
            name: "stockQuantity",
            type: "input",
            message: "What is the quantity available for sale?",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        }
    ])
        .then(function (answer) {
            // After prompt is done, insert quantity added to database with information manager entered
            connection.query("INSERT INTO stock_quantity SET ?",
                {
                    stock_quantity: answer.stockQuantity
                },
                function (error) {
                    if (error) throw (error)
                    console.log("\n Your new product quantity has been added succesfully! \n");

                    displayProducts();
                }
            )
        });
}
