require('dotenv').config(); 

import { Pool } from 'pg'; 
import Promise from 'bluebird'; 


const config = {
    user: process.env.NODE_ENV === 'production' ? process.env.AWS_USER : process.env.LOCAL_USER,
    host: process.env.NODE_ENV === 'production' ? process.env.AWS_HOST : process.env.LOCAL_HOST,
    database: process.env.NODE_ENV === 'production' ? process.env.AWS_DATABASE : process.env.LOCAL_DATABASE,
    password: process.env.NODE_ENV === 'production' ? process.env.AWS_PASSWORD : process.env.LOCAL_PASSWORD,
    port: process.env.NODE_ENV === 'production' ? process.env.AWS_PORT : process.env.LOCAL_PORT,
    max: 20
}


//create new instance of PostGres database

const db = new Pool(config); 

db.on('connect', () => {
    console.log('successfully connected to pg', config.database);
});

db.on('remove', client => {
    console.log('successfully removed client'); 
});

db.on('error', err => {
    console.log('error in pg'); 
}); 

db.connect(); 

Promise.promisifyAll(db); 

export default db; 