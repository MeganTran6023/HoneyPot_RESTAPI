# HoneyPot Website - Backend REST API Development

### Purpose ###

To make a website that allows teachers or instructors to enter in exam/ assignment questions and answers with API methods. Plan is to turn this into a mock honeypot website to catch students attempting to cheat.

----------------------------------------

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

 ```node app_api.js```

This should show in terminal:

![image](https://github.com/user-attachments/assets/be25d761-afa8-4705-a946-6c68a65056d1)


## 5) Use Postman or Insomnia to test REST API requests


a) GET (get all items)

![image](https://github.com/user-attachments/assets/3f390611-7cf3-4215-99f9-f68072d9a9f1)

b) DELETE (delete a post)

![image](https://github.com/user-attachments/assets/f0f5f751-a1b5-44d3-93a4-07d8315818fb)

c) POST (add a new question)

![image](https://github.com/user-attachments/assets/47a3a493-8761-40f7-83a2-7d8497c4380a)

d) PUT (update a post)

![image](https://github.com/user-attachments/assets/03252c36-ab8b-45c9-9014-a5d7b90f23cf)




