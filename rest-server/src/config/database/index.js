require('dotenv').config(); 

import { Pool } from 'pg'; 
import Promise from 'bluebird'; 


const config = {

}


//create new instance of PostGres database

const db = new Pool(config); 

db.on('connect', () => {
    console.log('successfully connected to pg');
});

db.on('remove', client => {
    console.log('successfully removed client, ', client); 
});

db.on('error', err => {
    console.log('error in pg', err); 
}); 

db.connect(); 

Promise.promisifyAll(db); 

export default db; 