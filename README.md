1. Download the Homework3.zip from Week 14

2: Initialize a Node.js Project

Create a valid package.json
3: Install Required Dependencies

 install dotenv
 install mongodb
4a: Setup and use your own Atlas Mongo DB

HINT: Review Week 12 (4/08) for Setup of Mongo Atlas
Your .env file should have your own DB_USER, DB_PASSWORD, DB_HOST and DB_NAME
Remember the creds are only related to the project you create and NOT your actual Mongo creds
4b: Update the db.js file with a MongoDB Class

HINT: Review Week 5 (2/19) for JS Classes
Implement a constructor
accepts the environment variables
uses the environment variables to constructs the Mongo URL
defines variables for the MongoDB client and database.
Implement connect() method to establish a connection to the MongoDB database.
Implement close() method to close the connection to the MongoDB database.
Implement create(collectionName, data) method to insert a new document into the specified collection.
Implement find(collectionName, _id) method to find documents by their _id in the specified collection
Exports the Class so that it can be instantiated in main.js
Do NOT export with the new keyword
 

5: Update the main.js file with Code to interact with db.js

Write the code to import the MongoDB class from the db.js file.
Update the async function named main() that will perform the MongoDB operations:
Instantiate a new MongoDB
loading in the .env and passing in env variables
Connect to Mongo
Insert test data into the villains collection.
Find the inserted test data by its _id and log the result to the console
Handle errors and close the database connection in a try/catch/finally block.
Call the main() function to execute the MongoDB operations.
 

8: Run the Application

In your terminal, run the following command to execute the main.js file: node main.js
 
SAMPLE OUTPUT

Connected to MongoDB
FOUND:
{
  _id: new ObjectId('662566c54f0b28e540f788e6'),
  first: 'Harley',
  last: 'Quinn',
  city: 'Gotham City',
  occupation: 'Supervillain'
}
Closed connection to MongoDB

Submission:

Create and submit a zip file containing the following:
package.json
.env
db.js
main.js
Do not include the node_modules directory in your zip file.