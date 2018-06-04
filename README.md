# Bamazon: Node.js & MySQL Homework #10

This app is similar to Amazon's storefront; it displays the products available for sale and then the customer can place the order reducing inventory count. In addition, the manager can view inventory that has a quantity less than 5, manage existing inventory by increasing product quantity and adding new products.

## Getting Started

Create MYSQL database called `bamazon`. Then make a table called `products` which includes item_id, product_name,department_name, price and stock_quantity. We need to have some data in the table to test if the app works, so build 10 generic data. I love Restoration Hardware, so I used their product data in my table.
#### Screenshot

<img width="1277" alt="screen shot 2018-06-03 at 1 48 27 pm" src="https://user-images.githubusercontent.com/35505038/40890599-b1eca008-6735-11e8-9e2b-4c0ad418bd40.png">

## Deployment 
### bamazonCustomer

Navigate to the root of your project. Then in the terminal command line run `node bamazonCustomer.js`, this will display the products available for sale.

Then it prompts the customer to provide the item number of the product they would like to buy and the quantity. The app will check if there's enough quantity to fullfill the customer's order and the transaction is processed and outputs the customer's total dollar order amount. If there's not enough product available, the customer will receive a message 'Insufficient quantity!'. Finally, the customer has an option to exit the app by pressing 'Q".

#### Screenshot

![screen shot 2018-06-03 at 2 57 37 pm](https://user-images.githubusercontent.com/35505038/40891189-968b7b64-673e-11e8-9bc1-357f4168b94c.png)

### bamazonManager

Navigate to the root of your project. Then in the terminal command line run `node bamazonManager.js`, this will display a menu option to the manager.

![screen shot 2018-06-03 at 9 24 05 pm](https://user-images.githubusercontent.com/35505038/40897273-6a73064e-6777-11e8-88d7-9d8f8f3e3359.png)

If the manager selects, "View Products for Sale" it will display all the available products for sale.
#### Screenshot

![screen shot 2018-06-03 at 9 24 05 pm](https://user-images.githubusercontent.com/35505038/40897317-adc29d06-6777-11e8-9536-0a10d27d6c36.png)

If the manager selects, "View Items with Low Inventory", it will display products with a quantity of 5 or less.
#### Screenshot

![screen shot 2018-06-03 at 9 49 00 pm](https://user-images.githubusercontent.com/35505038/40897475-8859f446-6778-11e8-9db6-cfa253448b26.png)

If the manager selects, "Add Inventory to an Item" from a list, it will add more inventory to an existing product.

#### Screenshot

![screen shot 2018-06-03 at 9 52 00 pm](https://user-images.githubusercontent.com/35505038/40897722-f52afe2a-6779-11e8-96d0-ea580ec04e99.png)

If the manager, selects "Add a New Product", it will add a brand new product.
#### Screenshot

![screen shot 2018-06-03 at 9 58 48 pm](https://user-images.githubusercontent.com/35505038/40897706-df15c854-6779-11e8-9a5a-3f4dceee8ff0.png)

## Built With

* Visual Studio Code (https://code.visualstudio.com) - Text editor
* Javascript 
* Node.js (https://nodejs.org/en) - Framework 
* JSON (http://www.json.org) - Data format 
* MySQL (https://www.mysql.com) - Database
* Sequel Pro (https://www.sequelpro.com) - Mac database management application for working with MYSQL database.
* MAMP (https://www.mamp.info/en/) - Access to local PHP server and MYSQL server

## Author

* **Cristina Defoe** - (https://github.com/cristinadefoe)

## Acknowledgments

* Thanks to anyone's code that was used as inspiration.