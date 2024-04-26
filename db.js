import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
/**
 * Class representing a MongoDB database connection and interactions
 */
class MongoDB {
    /**
     * constructor
     * Loads a .env, initializes a MongoDB connection URL using environment variables,
     * and sets up properties for the MongoDB client and database
     */

    constructor(){
        dotenv.config();

        const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;
        this.mongoURL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;
        
        this.client;
        this.db;
    }

    /**
     * Opens a connection to the MongoDB database
     */

    async connect(){
        try{
            this.client = new MongoClient(this.mongoURL);
            await this.client.connect();
            this.db = this.client.db();

            console.log('Connected to MongoDB');
        }catch(err){
            console.error(err);
        }
    }

    /**
     * Closes the connection to the MongoDB database.
     */

    async close(){
        try{
            await this.client.close();
            console.log('Disconnected from MongoDB');
        }catch(err){
            console.error(err);
        }
    }

    /**
     * Creates a new document in the specified collection
     * @param {string} collectionName - the name of the collection
     * @param {Object} data - the data to be inserted into the collection
     * @returns {Promise<Object>} - a Promise that resolves with the acknoledgement document
     */
    
    async create(collectionName, data){
        try{
            const collection = this.db.collection(collectionName);
            console.log('Item(s) has been inserted to Database');
            return await collection.insertOne(data);
            // console.log('Item has been inserted to Database');
        }catch(err){
            console.error(err);
        }
    }

    /**
     * Finds documents by their _id in the specified collection
     * @param {string} collectionName - the name of the collection
     * @param {string} _id - the _id of the document to find
     * @returns {Promise<Cursor>} - a Promise that resolves with the cursor
     */
    async find(collectionName, _id){
        try{
            const collection = this.db.collection(collectionName);

            if(_id){
                const cursor = collection.find({
                    _id: _id
                }).toArray();
                return cursor;
            }else{
                const cursor = collection.find({}).toArray();
                return cursor;
            }
        }catch(err){
            console.error(err);
        }
    }
}

export default MongoDB;