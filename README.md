# Laravel API 
Public API using Laravel, available endpoints "promocion" and "promopromotionDetail" both endpoints retrieve the data from a mysql database.

## Table of Contents
1. [Installation](#installation)
2. [Project Motivation](#project-motivation)
3. [Endpoints Description](#Endpoints-descriptions)
4. [Licensing, Authors, Acknowledgements, etc.](#licensing-authors-acknowledgements)

## Installation:
To run this project you have to have installed previusly php, composer framework and mysql. 
1. Change the database configuration with you configuration using the .env file. 
Example:
    ```
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=laravel
    DB_USERNAME=root
    DB_PASSWORD=
    ```
2. Run the commands console 
    ```
    npm install
    ```
    This command will be install in your computer all the dependencies. 
3. Run the command in console
    ```
    php artisan migrate
    ```
    This command will be create the tables in mysql. 
4. Run the command in console
    ```
    php artisan db:seed --class=PromocionTableSeeder
    ```
    ```
    php artisan db:seed --class=PromotionsDetailsTableSeeder
    ```
    This command will generate fake data to populate the database, with this step you'll be able to run test. 
5. Run Laravel
    ```
    php artisan serve
    ```

## Project Motivation
My motivation for this project was create two endpoints for Guatemala.com with the goal to test this technology and improve my knowledge. 


## Endpoints Descriptions
The objective of this Jupyter Notebook is show all the flow and process with:
1. http://localhost:8000/api/promocion
This enppoint provides basic information about promotions, with the next values:
    * Id
    * Title
    * Price
    * Address
2. http://localhost:8000/api/promotionDetail
This endpoint provides the detail of each promotion
    * Id
    * Title
    * Price
    * latitude
    * longitude
    * created_at
    * updated_at


## Licensing, Authors, Acknowledgements
The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
