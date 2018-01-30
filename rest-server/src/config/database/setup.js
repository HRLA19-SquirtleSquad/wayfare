import {
    createDatabase,
    dropDatabase, 
    useDatabase,
    createUserTable, 
    dropUserTable,
    createListingTable,
    dropListingTable,
    createRequestTable,
    dropRequestTable,
    createReviewTable,
    dropReviewTable,
    createImageTable,
    dropImageTable
} from '../../lib/SQL';

const setup = async () => {
    await dropDatabase(); 

    await dropRequestTable(); 
    await dropReviewTable(); 
    await dropImageTable(); 
    await dropListingTable(); 
    await dropUserTable(); 
    
    await createDatabase(); 
    await createUserTable(); 
    await createListingTable(); 
    await createRequestTable(); 
    await createReviewTable(); 
    await createImageTable(); 

    process.exit(); 
}; 

setup(); 