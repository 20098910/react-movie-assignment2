# Assignment 2 - Web API.

Name: Shane

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)
 
 + Users can create and account
 + Feature 2 
 + Feature 3 
 + etc

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]
In the backend progran, naviate to the movie-api folder in the console and run 
  ```
  npm run dev
  ```
This is required before running the main program to get login and sign up working



 In this program, navigate to the <b>/movies/</b> folder and run:

  ```
  npm start
  ```
A web page will open in your web browser allow you to navigate the website

## API Configuration

Describe any configuration that needs to take place before running the API. For example, creating an `.env` file and what variables to put in it. Give an example of how this might be done.

REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

______________________
NODEENV=development
PORT=8080
HOST=
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 

- /api/movies | GET | Gets a list of movies 
- /api/movies/{movieid} | GET | Gets a single movie 
- /api/movies/{movieid}/reviews | GET | Get all reviews for movie 
- /api/movies/{movieid}/reviews | POST | Create a new review for Movie 

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).

## Security and Authentication

Give details of authentication/security implemented on the API (e.g. passport/sessions). Indicate which routes are protected.

## Integrating with React App

Describe how you integrated your React app with the API. List the views that use your Web API instead of the TMDB API. Describe any other updates to the React app from Assignment One.

## Independent learning (if relevant)

Briefly explain any non-standard features developed for the app.
