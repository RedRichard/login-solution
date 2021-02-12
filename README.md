# Login solution - MERN stack app

A MERN stack app that implements JWT token authentication.

**Login page**

<img src="https://github.com/RedRichard/login-solution/blob/master/images/login-solution-login.png" width="600"/>

The **dbSeeds.js** file creates 2 users whose data can be used to log in.

    Username: test1
    Password: test
    
    Username: test2
    Password: test

**Dashboard page**

<img src="https://github.com/RedRichard/login-solution/blob/master/images/login-solution-dashboard.png" width="600"/>

## Docker

To run the app use the **docker-compose.yaml** file.
  
    docker-compose -f ./docker-compose.yaml up
  
Access services:
  - Frontend: http://localhost:3000
  - Backend: http://localhost:9000
  - Mongo-Express (To check DB contents): http://localhost:8080 

## Backend

Developed with Node, Express and MongoDB.

This server allows the user to get a token to log in.

A local mongodb instance needs to be running on port 27017.

To run, access the **backend** folder and run:

    npm start

## Frontend

Develped with React.
Provides a user interface from which to request a token and log in.

To run, access the **frontend** folder and run:

    npm start
