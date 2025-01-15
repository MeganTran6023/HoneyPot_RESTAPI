# HoneyPot_RESTAPI

### 1- Necessary Dependencies ###

1) Get packages.json by typing in terminal 

``` npm init -y ```

2) You need express, mongoose, and dotenv with:

``` npm install express mongoose dotenv ```

-> express sets web framework for handling HTTP requests + routings
-> mongoose is needed for js file to connect to MongoDB (database), this saves info in our api
-> dotenv enables us to properly connect to MongoDB using our connection with admin login

### 2) .gitignore file

add nodes_modules and .env to file

### 3) .env file contents

this should include a variable for your admin password as well as the mongodb server url on the mongodb website.


### 4) Run app.js ###

node app_api.js

## 5) Use Postman or Insomnia to test REST API requests
