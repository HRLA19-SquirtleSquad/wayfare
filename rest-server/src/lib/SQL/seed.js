import db from '../../config/database'
import {
  dropAllTables,
  createAllTables
} from './'

export const createSeedUsers = async () => {
  try {
    let query = "insert into users values (DEFAULT, 'Danieo Sanchez', 'damndanieo@skynet.com', 'asdj4569ssf90', 'hi, im daniel', 'https://media.mnn.com/assets/images/2015/09/river-otters-lead-photo.jpg.638x0_q80_crop-smart.jpg', 'LA', 0, 0, 0, 0.05, 323)"
    await db.queryAsync(query)
    console.log('user seed data 1 inserted'); 
  } catch (err) {
    console.log('user seed data 1 did not insert', err)
  }
  
  try {
    let query = "insert into users values (DEFAULT, 'Chris King-Kong', 'emergency@poopvan.com', 'asdf823r9asd', 'hi, im chris', 'https://images-na.ssl-images-amazon.com/images/I/513Y54TGdwL._SY445_.jpg', 'LA', 0, 0, 0, 2.2, 43)"
    await db.queryAsync(query)
    console.log('user seed data 2 inserted'); 
  } catch (err) {
    console.log('user seed data 2 did not insert', err)
  }
  
  try {
    let query = "insert into users values (DEFAULT, 'Brian Hong', 'briguy@aol.com', 'asdfi34309', 'hi, im brian', 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/043.png', 'LA', 1, 3.2, 12, 0, 0)"
    await db.queryAsync(query)
    console.log('user seed data 3 inserted'); 
  } catch (err) {
    console.log('user seed data 3 did not insert', err)
  }
  
  try {
    let query = "insert into users values (DEFAULT, 'ErIc Carmona', 'BballinEric@lakers.com', 'sdiwef23r8nv', 'hi, im erIc', 'https://cdn-s3.si.com/s3fs-public/teams/basketball/nba/players/214152-300x300.png', 'LA', 1, .01, 14, 5, 22)"
    await db.queryAsync(query)
    console.log('user seed data 4 inserted'); 
  } catch (err) {
    console.log('user seed data 4 did not insert', err)
  } 

}

export const createSeedListings = async () => {
  try {
    let query = "insert into listings values (default, 'The comfiest dining room bed in the world', '2/3/18', '2/26/18', 1.2032934, 123.2340923, '1234 drive', 'Los Angeles', 'CA', 'United States', 3, null, 0, 'Need a place to sleep in privacy and comfort? Well then, this is not for you. Come join me for a roof over your head, a comfy bed and a table to eat at, all from the same position.', 'PENDING')"; 
    await db.queryAsync(query); 
    console.log('listing seed data 1 inserted')
  } catch (err) {
    console.log('lising seed data 1 did not insert', err); 
  }

  try {
    let query = "insert into listings values (default, 'Erics bitchin pad', '2/14/18', '2/15/18', 24.3424, 54093.1234, '4456 place avenue', 'Los Angeles', 'CA', 'United States', 4, null, 0, 'Come sleep here for some tutuchu tutuchu', 'PENDING') "
    await db.queryAsync(query); 
    console.log('listing seed data 2 inserted'); 
  } catch (err) {
    console.log('listing seed data 2 did not insert', err)
  }

  try {
    let query = "insert into listings values (default, 'The MF plaza', '2/17/18', '2/27/18', 4.3413412, 23.25345, '768 5th Ave', 'New York', 'NY', 'United States', 1, null, 1, 'Come sleep at tha plazaaa', 'PENDING') "
    await db.queryAsync(query); 
    console.log('listing seed data 3 inserted'); 
  } catch (err) {
    console.log('listing seed data 3 did not insert', err)
  }

  try {
    let query = "insert into listings values (default, 'SD chris cool pad', '2/17/18', '2/27/18', 2.234234, 13.63456, '11039 Avenida De Los Lobos', 'San Diego', 'CA', 'United States', 2, null, 1, 'Come sleep at tha plazaaa', 'PENDING') "
    await db.queryAsync(query); 
    console.log('listing seed data 4 inserted'); 
  } catch (err) {
    console.log('listing seed data 4 did not insert', err)
  }
  
}

export const createSeedRequests = async () => {
  try {
    let query = "insert into requests values (default, 1, 1)"
    await db.queryAsync(query); 
    console.log('request seed data 1 inserted'); 
  } catch (err) {
    console.log('request seed data 1 did not insert')
  }

  try{
    let query = "insert into requests values (default, 3, 2)";
    await db.queryAsync(query); 
    console.log('request seed data 2 inserted'); 
  } catch (err) {
    console.log('request seed data 2 did not insert'); 
  }
}

export const createSeedReviews = async () => {
  try {
    let query = "insert into reviews values (default, null, 5, 'This place was great! I loved the breakfast in bed, it was even right from the table!', 2, 3, 'guest')"
    await db.queryAsync(query); 
    console.log('review seed data 1 inserted'); 
  } catch (err) {
    console.log('review seed data 1 did not insert', err)
  }

  try {
    let query = "insert into reviews values (default, null, 0, 'DO NOT BOOK. Host misunderstood my offer to help him make music...', 1, 4, 'guest')"
    await db.queryAsync(query); 
    console.log('review seed data 2 inserted'); 
  } catch (err) {
    console.log('review seed data 2 did not insert')
  }
}

export const createSeedImages = async () => {
  try {
    let query = "insert into images values (default, 1, 'http://www.westchestergardenapts.com/new/wp-content/uploads/2017/12/interior4.jpg')"
    await db.queryAsync(query); 
    console.log('image seed data 1 inserted'); 
  } catch (err) {
    console.log('image seed data 1 did not insert')
  }

  try {
    let query = "insert into images values (default, 2, 'http://www.topinspired.com/wp-content/uploads/2013/11/Ideas-For-Unforgettable-Romantic-Surprise-1.jpg')"
    await db.queryAsync(query); 
    console.log('image seed data 2 inserted'); 
  } catch (err) {
    console.log('image seed data 2 did not insert')
  }

  try {
    let query = "insert into images values (default, 3, 'https://images.datahubus.com/5739f864b5dc6545f27c3164/the-plaza-residences/1-central-park-south_.jpg')"
    await db.queryAsync(query); 
    console.log('image seed data 2 inserted'); 
  } catch (err) {
    console.log('image seed data 2 did not insert')
  }
}

export const createSeedSkills = async () => {
  try {
    let query = "insert into skills values (default, 1, null, 'make music')"; 
    await db.queryAsync(query); 
    console.log('skill seed data 1 inserted')
  } catch (err) {
    console.log('skill seed data 1 did not insert', err)
  }

  try {
    let query = "insert into skills values (default, 1, null, 'teach photography')"; 
    await db.queryAsync(query); 
    console.log('skill seed data 2 inserted')
  } catch (err) {
    console.log('skill seed data 2 did not insert')
  }

  try {
    let query = "insert into skills values (default, 2, null, 'I will teach you to smash anyone in smash bros')"; 
    await db.queryAsync(query); 
    console.log('skill seed data 3 inserted')
  } catch (err) {
    console.log('skill seed data 3 did not insert')
  }

  try {
    let query = "insert into skills values (default, 4, null, 'I can show you how to shoot hoops')"; 
    await db.queryAsync(query); 
    console.log('skill seed data 4 inserted')
  } catch (err) {
    console.log('skill seed data 4 did not insert')
  }

  try {
    let query = "insert into skills values (default, null, 1, 'Do dishes')"; 
    await db.queryAsync(query); 
    console.log('skill seed data 5 inserted')
  } catch (err) {
    console.log('skill seed data 5 did not insert')
  }

  try {
    let query = "insert into skills values (default, null, 2, 'Totochu-totochu')"; 
    await db.queryAsync(query); 
    console.log('skill seed data 6 inserted')
  } catch (err) {
    console.log('skill seed data 6 did not insert')
  }

  try {
    let query = "insert into skills values (default, 3, null, 'I will cook some bomb food')"; 
    await db.queryAsync(query); 
    console.log('skill seed data 7 inserted')
  } catch (err) {
    console.log('skill seed data 7 did not insert')
  }
}

export const createRequestSkill = async () => {
  try {
    let query = "insert into requestSkills values (default, 2, 1)"; 
    await db.queryAsync(query); 
    console.log('RequestSkill seed data 1 inserted')
  } catch (err) {
    console.log('RequestSkill seed data 1 did not insert')
  }

  try {
    let query = "insert into requestSkills values (default, 7, 2)"; 
    await db.queryAsync(query); 
    console.log('RequestSkill seed data 2 inserted')
  } catch (err) {
    console.log('RequestSkill seed data 2 did not insert')
  }
}

const seedData = async () => {
  await dropAllTables();
  await createAllTables();
  await createSeedUsers(); 
  await createSeedListings(); 
  await createSeedRequests(); 
  await createSeedReviews(); 
  await createSeedImages(); 
  await createSeedSkills(); 
  await createRequestSkill(); 

  process.exit(); 
}

seedData(); 