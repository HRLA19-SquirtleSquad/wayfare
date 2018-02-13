require('dotenv').config(); 

import db from '../../config/database'; 

const database = process.env.NODE_ENV === 'production' ? process.env.AWS_DATABASE : process.env.LOCAL_DATABASE;


// SQL functions for database creation, use and drop
export const createDatabase = async () => {
    try {
        await db.queryAsync(
            `CREATE DATABASE ${database}`
        );
        console.log('successfully created database ', database); 
    } catch (err) {
        console.log('error creating database, '); 
    }
}

export const dropDatabase = async () => {
    try {
        await db.queryAsync(
            `DROP DATABASE IF EXISTS ${database}`
        ); 
        console.log('successfully dropped database ', database)
    } catch (err) {
        console.log('error dropping database '); 
    }
}; 

export const useDatabase = async () => {
    try {
        await db.queryAsync(
            `USE IF EXISTS ${database}`
        );
        console.log('successfully using database ', database)
    } catch (err) {
        console.log('error using database ', err); 
    }
}; 

//USERS table
export const createUserTable = async () => {
    try {
        await db.queryAsync(
            `CREATE TABLE IF NOT EXISTS users (
                id SERIAL, 
                name VARCHAR(255),
                email VARCHAR(255) UNIQUE NOT NULL,
                uid VARCHAR (255) NOT NULL,
                bio text, 
                image text,
                city VARCHAR (255),
                type INT DEFAULT 0,
                hostRating NUMERIC DEFAULT 0,
                hostRatingCount INT DEFAULT 0,
                guestRating NUMERIC DEFAULT 0,
                guestRatingCount INT DEFAULT 0,
                CONSTRAINT users_pk PRIMARY KEY(id)
            )
                `
        );
        console.log('successfully created users table');

    } catch (err) {
        console.log('error creating users table ', err); 
    }
};

export const dropUserTable = async () => {
    try {
        await db.queryAsync( 
            `DROP TABLE IF EXISTS users`
        );
        console.log('successfully dropped users table')
    } catch (err) {
        console.log('error dropping users table ', err); 
    }
}; 

export const dropAllTables = async () => {
    await dropReviewTable(); 
    await dropImageTable(); 
    await dropRequestSkillTable(); 
    await dropSkillTable(); 
    await dropRequestTable(); 
    await dropListingTable(); 
    await dropUserTable(); 
}
export const createAllTables = async () => {
    await createUserTable(); 
    await createListingTable(); 
    await createRequestTable(); 
    await createReviewTable(); 
    await createImageTable(); 
    await createSkillTable(); 
    await createRequestSkillTable(); 
}

//LISTINGS table
export const createListingTable = async () => {
    try {
        await db.queryAsync(
            `CREATE TABLE IF NOT EXISTS listings (
                id SERIAL, 
                title VARCHAR (500) NOT NULL,
                startDate VARCHAR(255) NOT NULL, 
                endDate VARCHAR(255) NOT NULL,
                latitude NUMERIC,
                longitude NUMERIC,
                address VARCHAR (500),
                city VARCHAR (250),
                state VARCHAR (250),
                country VARCHAR (250),
                hostId INT,
                guestId INT,
                viewCount INT DEFAULT 0,
                description TEXT,
                status VARCHAR (255) NOT NULL DEFAULT 'pending',
                CONSTRAINT listings_pk PRIMARY KEY(id),
                CONSTRAINT fk_listings_hostId FOREIGN KEY(hostId) REFERENCES users(id),
                CONSTRAINT fk_listings_guestId FOREIGN KEY(guestId) REFERENCES users(id)
            )
                `
        );
        console.log('successfully created listings table');

    } catch (err) {
        console.log('error creating listings table ', err); 
    }
};

export const dropListingTable = async () => {
    try {
        await db.queryAsync( 
            `DROP TABLE IF EXISTS listings`
        );
        console.log('successfully dropped listings table')
    } catch (err) {
        console.log('error dropping listings table ', err); 
    }
}; 

//REQUESTS table
export const createRequestTable = async () => {
    try {
        await db.queryAsync(
            `CREATE TABLE IF NOT EXISTS requests (
                id SERIAL, 
                guestId INT,
                listingId INT,
                CONSTRAINT requests_pk PRIMARY KEY(id),
                CONSTRAINT fk_requests_listingId FOREIGN KEY(listingId) REFERENCES listings(id),
                CONSTRAINT fk_requests_guestId FOREIGN KEY(guestId) REFERENCES users(id)
            )
                `
        );
        console.log('successfully created requests table');

    } catch (err) {
        console.log('error creating requests table ', err); 
    }
};

export const dropRequestTable = async () => {
    try {
        await db.queryAsync( 
            `DROP TABLE IF EXISTS requests`
        );
        console.log('successfully dropped requests table')
    } catch (err) {
        console.log('error dropping requests table ', err); 
    }
};

//REVIEWS table
export const createReviewTable = async () => {
    try {
        await db.queryAsync(
            `CREATE TABLE IF NOT EXISTS reviews (
                id SERIAL, 
                parentId INT DEFAULT 0,
                rating NUMERIC, 
                review TEXT, 
                commentor INT, 
                commentee INT,
                type TEXT,
                CONSTRAINT reviews_pk PRIMARY KEY(id), 
                CONSTRAINT fk_reviews_parentId FOREIGN KEY(parentId) REFERENCES reviews(id),
                CONSTRAINT fk_reviews_commentor FOREIGN KEY(commentor) REFERENCES users(id),
                CONSTRAINT fk_reviews_commentee FOREIGN KEY(commentee) REFERENCES users(id)
            )
                `
        );
        console.log('successfully created reviews table');

    } catch (err) {
        console.log('error creating reviews table ', err); 
    }
};

export const dropReviewTable = async () => {
    try {
        await db.queryAsync( 
            `DROP TABLE IF EXISTS reviews`
        );
        console.log('successfully dropped reviews table')
    } catch (err) {
        console.log('error dropping reviews table ', err); 
    }
}; 


//IMAGES table
export const createImageTable = async () => {
    try {
        await db.queryAsync(
            `CREATE TABLE IF NOT EXISTS images (
                id SERIAL, 
                listingId INT, 
                url VARCHAR (500) NOT NULL,
                CONSTRAINT images_pk PRIMARY KEY(id), 
                CONSTRAINT fk_images_listingId FOREIGN KEY(listingId) REFERENCES listings(id)
              )
                `
        );
        console.log('successfully created images table');

    } catch (err) {
        console.log('error creating images table ', err); 
    }
};

export const dropImageTable = async () => {
    try {
        await db.queryAsync( 
            `DROP TABLE IF EXISTS images`
        );
        console.log('successfully dropped images table')
    } catch (err) {
        console.log('error dropping images table ', err); 
    }
};


export const createSkillTable = async () => {
    try {
        await db.queryAsync(
            `CREATE TABLE IF NOT EXISTS skills (
                id SERIAL, 
                userId INT,
                listingId INT,
                skill VARCHAR(255) NOT NULL, 
                CONSTRAINT skills_pk PRIMARY KEY(id), 
                CONSTRAINT fk_skills_userId FOREIGN KEY(userId) REFERENCES users(id),
                CONSTRAINT fk_skills_listingId FOREIGN KEY(listingId) REFERENCES listings(id)
            )
                `
        );
        console.log('successfully created skills table');

    } catch (err) {
        console.log('error creating skills table ', err); 
    }
};

export const dropSkillTable = async () => {
    try {
        await db.queryAsync( 
            `DROP TABLE IF EXISTS skills`
        );
        console.log('successfully dropped skills table')
    } catch (err) {
        console.log('error dropping skills table ', err); 
    }
}; 

export const createRequestSkillTable = async () => {
    try {
        await db.queryAsync(
            `CREATE TABLE IF NOT EXISTS requestSkills (
                id SERIAL, 
                skillId INT,
                requestId INT,
                CONSTRAINT requestSkills_pk PRIMARY KEY(id), 
                CONSTRAINT fk_requestSkills_skillId FOREIGN KEY(skillId) REFERENCES skills(id),
                CONSTRAINT fk_requestSkills_requestId FOREIGN KEY(requestId) REFERENCES requests(id)
            )
                `
        );
        console.log('successfully created requestSkills table');

    } catch (err) {
        console.log('error creating requestSkills table ', err); 
    }
};

export const dropRequestSkillTable = async () => {
    try {
        await db.queryAsync( 
            `DROP TABLE IF EXISTS requestSkills`
        );
        console.log('successfully dropped requestSkills table')
    } catch (err) {
        console.log('error dropping requestSkills table ', err); 
    }
}; 