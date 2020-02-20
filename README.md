# Integration Intern Asessment

## Before You Get Started

This project requires you to have [nodejs](https://nodejs.org/en/) set-up on your computer. If you cannot run `npm -v` from your terminal, you will need to install it. It will also be easiest to check your requests/routes by using [Postman](https://www.postman.com/downloads/). 

## Your Task

The goal of this asessment is for you to clone a repo, run a server, and make requests to it.

1. Clone this repo and copy the contents into your own repo. Please name your repo [FIRST NAME]-[LAST NAME]-integration
2. Inside this repo, there is a [Express Server](https://expressjs.com/) in the backend folder
3. You may need to install `npm install --save express` before you can start the server
4. Run `node server.js` inside of the backend folder to start the server (do not close this terminal)
5. To test that the server is running, open a web browser and go to `http://localhost:3000/favorites`
6. Also create a POST request inside of Postman to `http://localhost:3000/favorites`
7. In a new terminal, cd into the frontend folder. Inside this folder is a [React Web App](https://reactjs.org/)
8. Run `npm start` from the new terminal and select to use a different port if 3000 is taken. This should launch a default React Web App
9. Your task is to: 
  - Edit the favoritesData.json file inside of backend/api/mockData to include 3 different catergories (right now it only includes books)
  - On the frontend, using the GET Request provided inside of App.js, display the responseJson in a meaningful and styled way
10. Either share access to your repo with @madelinemckune or zip up your project and email it to pigpocketrecruiting@gmail.com

## Please Note

Your assessment will be compared to other applicants. You have 48 hours to complete the asessment, but we do not expect you to spend more than 3 hours on it. You are allowed to use any and all resources available to you.
