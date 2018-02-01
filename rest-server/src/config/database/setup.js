import {
    createDatabase,
    dropDatabase, 
    createUserTable, 
    dropUserTable,
    createListingTable,
    dropListingTable,
    createRequestTable,
    dropRequestTable,
    createReviewTable,
    dropReviewTable,
    createImageTable,
    dropImageTable, 
    createSkillTable, 
    dropSkillTable, 
    createRequestSkillTable, 
    dropRequestSkillTable
} from '../../lib/SQL';


const setup = async () => {
    await dropDatabase(); 

    await dropReviewTable(); 
    await dropImageTable(); 
    await dropRequestSkillTable(); 
    await dropSkillTable(); 
    await dropRequestTable(); 
    await dropListingTable(); 
    await dropUserTable(); 
    
    
    await createDatabase(); 
    await createUserTable(); 
    await createListingTable(); 
    await createRequestTable(); 
    await createReviewTable(); 
    await createImageTable(); 
    await createSkillTable(); 
    await createRequestSkillTable(); 

    process.exit(); 
}; 

setup(); 
