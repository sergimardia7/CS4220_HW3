import { FindCursor } from 'mongodb';
import MongoDB from './db.js';

async function main() {

    try{
        const database = new MongoDB();
        await database.connect();

        const testData = {
            first: 'Harley',
            last: 'Quinn',
            city: 'Gotham City',
            occupation: 'Supervillain'
        };

        const insertedData = await database.create('villains', testData);
        //console.log('Inserted Data: ', insertedData.insertedId);
        const findData = await database.find('villains', insertedData.insertedId);
        // const foundData = await findData.toArray();


        console.log(findData);
        return database.close();
    //const insertedData = await database
    }catch(err){
        console.log(err);
    }
}

main();