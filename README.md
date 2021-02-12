# Login solution - MERN stack app

A MERN stack app that implements JWT token authentication.

## Docker

To run the app use the **docker-compose.yaml** file.
  
    docker-compose -f ./docker-compose.yaml up
  
Access services:
  - Frontend: http://localhost:9000
  - Backend: http://localhost:3000
  - Mongo-Express (To check DB contents): http://localhost:8080 

## Backend

Developed with Node, Express and MongoDB.
This API allows the user to get a token to log in.

A local mongodb instance needs to be running on port 27017.

To run, access the **backend** folder and run:

    npm start

## Frontend

Develped with React.
Provides a user interface from which to request a token and log in.

To run, access the **frontend** folder and run:

    npm start
