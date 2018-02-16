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
    let query = "insert into users values (DEFAULT, 'Chris Kong', 'emergency@poopvan.com', 'asdf823r9asd', 'hi, im chris', 'https://images-na.ssl-images-amazon.com/images/I/513Y54TGdwL._SY445_.jpg', 'LA', 0, 0, 0, 2.2, 43)"
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
    let query = "insert into users values (DEFAULT, 'Lebron James', 'BballinEric@lakers.com', 'sdiwef23r8nv', 'I need help. I need a playmaker on my farm.', 'https://cdn-s3.si.com/s3fs-public/teams/basketball/nba/players/214152-300x300.png', 'charlotte', 1, .01, 14, 5, 22)"
    await db.queryAsync(query)
    console.log('user seed data 4 inserted'); 
  } catch (err) {
    console.log('user seed data 4 did not insert', err)
  } 

  try {
    let query = "insert into users values (DEFAULT, 'Monsieur Lapedite', 'dairyfarmer11@cows.com', 'sdiwef23r8nv', 'Im fluent in French and English!', 'https://k34.kn3.net/taringa/2/8/7/4/0/7/6/goku443/433.jpg?4144', 'Paris', 1, 4.5, 14, 5, 22)"
    await db.queryAsync(query)
    console.log('user seed data 5 inserted'); 
  } catch (err) {
    console.log('user seed data 5 did not insert', err)
  } 

  try {
    let query = "insert into users values (DEFAULT, 'Ash K.', 'iWantToBeTheVeryBest150@aol.com', 'lasjflasf', 'I enjoy taking long journeys ', 'https://pbs.twimg.com/profile_images/1811149515/Ash-Ketchum-pokemon-18073466-447-359_1_.jpg', 'Tokyo', 1, 3.5, 14, 5, 22)"
    await db.queryAsync(query)
    console.log('user seed data 6 inserted'); 
  } catch (err) {
    console.log('user seed data 6 did not insert', err)
  } 

  try {
    let query = "insert into users values (DEFAULT, 'Antonio Montana', 'caraCicatriz0@hotmail.com', 'wejnfasd', 'The world is MINE', 'https://steemit-production-imageproxy-upload.s3.amazonaws.com/DQmVYEvGfAK956oG1iEgPCCPkBjEb6wwEA9kq5QCKSgiJKn', 'Miami', 1, 4, 14, 5, 22)"
    await db.queryAsync(query)
    console.log('user seed data 6 inserted'); 
  } catch (err) {
    console.log('user seed data 6 did not insert', err)
  } 

  try {
    let query = "insert into users values (DEFAULT, 'Patrick Bateman', 'ImNotPsycho0@hotmail.com', 'awefesa', 'HUGE FAN of 80s music!', 'http://www4.pictures.zimbio.com/mp/_H_E2AP8Jkmx.jpg', 'New York', 1, 4.25, 14, 5, 22)"
    await db.queryAsync(query)
    console.log('user seed data 7 inserted'); 
  } catch (err) {
    console.log('user seed data 7 did not insert', err)
  } 

  try {
    let query = "insert into users values (DEFAULT, 'Marie Morado', 'grapez0@hotmail.com', 'werasd', 'Grapes are bae.', 'https://cdn.pastemagazine.com/www/system/images/photo_albums/women-in-wine/large/3-women-wine.jpg?1384968217', 'Rome', 1, 3, 14, 5, 22)"
    await db.queryAsync(query)
    console.log('user seed data 7 inserted'); 
  } catch (err) {
    console.log('user seed data 7 did not insert', err)
  } 
}

export const createSeedListings = async () => {
  try {
    let query = "insert into listings values (default, 'The comfiest dining room bed in the world', '2/3/18', '2/26/18', 33.959208, -118.406233, '8864 W 86th Pl', 'los angeles', 'CA', 'United States', 3, null, 0, 'Need a place to sleep in privacy and comfort? Well then, this is not for you. Come join me for a roof over your head, a comfy bed and a table to eat at, all from the same position.', 'pending')"; 
    await db.queryAsync(query); 
    console.log('listing seed data 1 inserted')
  } catch (err) {
    console.log('lising seed data 1 did not insert', err); 
  }

  try {
    let query = "insert into listings values (default, 'Pumpkin Farm', '2/14/18', '2/15/18', 35.273754, -80.704550, '3900 Rocky River Rd.', 'charlotte', 'NC', 'United States', 4, null, 0, 'I have a warm and spacious loft available so long as you can help me with planting the pumpkin vines.', 'pending') "
    await db.queryAsync(query); 
    console.log('listing seed data 2 inserted'); 
  } catch (err) {
    console.log('listing seed data 2 did not insert', err)
  }

  try {
    let query = "insert into listings values (default, 'Private Penthouse inside Plaza Hotel', '3/01/18', '3/15/18', 40.764609, -73.974355, '768 5th Ave', 'new york', 'NY', 'United States', 1, null, 1, 'I am an entrepeneur in need of a developer to build me a simple website. Stay at my penthouse with all amenities included. I just need a website for my new company. Thanks for looking!', 'pending') "
    await db.queryAsync(query); 
    console.log('listing seed data 3 inserted'); 
  } catch (err) {
    console.log('listing seed data 3 did not insert', err)
  }

  try {
    let query = "insert into listings values (default, 'Surbuban House Outside San Diego', '2/21/18', '2/28/18', 32.998508, -117.093690, '11039 Avenida De Los Lobos', 'san diego', 'CA', 'United States', 2, null, 1, 'Quiet 3 bedroom home 15 minutes outside of San Diego. Perfect for families or larger groups. Fence surrounding backyard needs to be painted. We will provide paint.', 'pending') "
    await db.queryAsync(query); 
    console.log('listing seed data 4 inserted'); 
  } catch (err) {
    console.log('listing seed data 4 did not insert', err)
  }

  try {
    let query = "insert into listings values (default, 'Small Bungalow Near Santa Monica Beach', '2/17/18', '2/27/18', 34.026653, -118.491537, '1221 12th St', 'los angeles', 'CA', 'United States', 3, null, 1, 'Small Bungalow near Santa Monica perfect for couples. Close to the beach and 3rd St. Im starting a small garden in the frontyard and need someone with experience to show me best practices.', 'pending') "
    await db.queryAsync(query); 
    console.log('listing seed data 5 inserted'); 
  } catch (err) {
    console.log('listing seed data 5 did not insert', err)
  }
  try {
    let query = "insert into listings values (default, 'Small Parisian Apartment with Available Bedroom', '3/05/18', '3/27/18', 48.848400, 2.290660, '65 Rue du Théâtre', 'paris', '', 'France', 5, null, 1, 'Small Apartment in the Grenelle district of Paris, just a 10 minute subway ride from most attractions. I need someone to help me conceal the entrance to my cellar. If you are capable, come stay with me', 'pending') "
    await db.queryAsync(query); 
    console.log('listing seed data 6 inserted'); 
  } catch (err) {
    console.log('listing seed data 6 did not insert', err)
  }

  try {
    let query = "insert into listings values (default, 'Spacious Apartment in the Heart of Tokyo', '2/27/18', '3/09/18', 35.736594, 139.703865, '3 Chome−33−6', 'tokyo', '', 'Japan', 6, null, 1, 'Very nice apartment near downtown Tokyo. I lost all my pets recently, and need help catching em all!', 'pending') "
    await db.queryAsync(query); 
    console.log('listing seed data 7 inserted'); 
  } catch (err) {
    console.log('listing seed data 7 did not insert', err)
  }

  try {
    let query = "insert into listings values (default, 'Retro Apartment near South Beach', '3/15/18', '4/15/18', 25.777342, -80.131627, '728 Ocean Dr.', 'miami', 'FL', 'United States', 7, null, 1, 'Great Location in the Art-Deco district of South Beach. I am meeting some associates of mine to purchase some product for my boss. It might be dangerous so I need extra muscle...', 'pending') "
    await db.queryAsync(query); 
    console.log('listing seed data 8 inserted'); 
  } catch (err) {
    console.log('listing seed data 8 did not insert', err)
  }

  try {
    let query = "insert into listings values (default, 'Luxurious Apartment near Central Park', '3/12/18', '4/01/18', 40.774637, -73.964338, '944 5th Ave', 'new york', 'NY', 'United States', 8, null, 1, 'Probably the best building this side of the park. You can stay here as long as you maintain it like it is. I need a graphic designer to design a new business card. It needs to be sleek and sophisticated.', 'pending') "
    await db.queryAsync(query); 
    console.log('listing seed data 9 inserted'); 
  } catch (err) {
    console.log('listing seed data 9 did not insert', err)
  }

  try {
    let query = "insert into listings values (default, 'Lovely Vineyard Outside Rome', '3/2/18', '3/21/18', 42.021078, 12.423134, '00123 Rome', 'rome','', 'Italy', 8, null, 1, 'We have a room available for a 1-2 people. Free to stay with us as long as you help with duties around the vineyard. Guest can enjoy the fruits of their labor', 'pending') "
    await db.queryAsync(query); 
    console.log('listing seed data 9 inserted'); 
  } catch (err) {
    console.log('listing seed data 9 did not insert', err)
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
    let query = "insert into reviews values (default, null, 5, 'This place was great! I loved the breakfast in bed, it was even right from the table!', 2, 3, 1, 'guest')"
    await db.queryAsync(query); 
    console.log('review seed data 1 inserted'); 
  } catch (err) {
    console.log('review seed data 1 did not insert', err)
  }

  try {
    let query = "insert into reviews values (default, null, 0, 'DO NOT BOOK. Host misunderstood my offer to help him make music...', 1, 4, 2, 'guest')"
    await db.queryAsync(query); 
    console.log('review seed data 2 inserted'); 
  } catch (err) {
    console.log('review seed data 2 did not insert')
  }

  try {
    let query = "insert into reviews values (default, null, 3, 'Great Host. Awesome Space!!', 3, 6, 7, 'guest')"
    await db.queryAsync(query); 
    console.log('review seed data 3 inserted'); 
  } catch (err) {
    console.log('review seed data 3 did not insert')
  }

  try {
    let query = "insert into reviews values (default, null, 4, 'Host was very knowledgable about local wildlife!', 4, 6, 7, 'guest')"
    await db.queryAsync(query); 
    console.log('review seed data 4 inserted'); 
  } catch (err) {
    console.log('review seed data 4 did not insert')
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
    let query = "insert into images values (default, 2, 'http://www.parentingnh.com/pumpkins_large_fb.jpg')"
    await db.queryAsync(query); 
    console.log('image seed data 2 inserted'); 
  } catch (err) {
    console.log('image seed data 2 did not insert')
  }

  try {
    let query = "insert into images values (default, 3, 'https://images.datahubus.com/5739f864b5dc6545f27c3164/the-plaza-residences/1-central-park-south_.jpg')"
    await db.queryAsync(query); 
    console.log('image seed data 3 inserted'); 
  } catch (err) {
    console.log('image seed data 3 did not insert')
  }

  try {
    let query = "insert into images values (default, 4, 'http://lizcoden.com/wp-content/uploads/2014/03/iStock_000006040520Small1.jpg')"
    await db.queryAsync(query); 
    console.log('image seed data 4 inserted'); 
  } catch (err) {
    console.log('image seed data 4 did not insert')
  }

  try {
    let query = "insert into images values (default, 5, 'https://i.pinimg.com/originals/65/b6/4d/65b64d0b0ac8b6054d9b5a2c36d22bc0.jpg')"
    await db.queryAsync(query); 
    console.log('image seed data 5 inserted'); 
  } catch (err) {
    console.log('image seed data 5 did not insert')
  }

  try {
    let query = "insert into images values (default, 6, 'https://www.frenchtravel.com.au/media/catalog/product/cache/2/small_image/276x188/44128b88ca4b35f22e7c5fda8e50629f/c/i/citadines_stgermain_exterior.jpg')"
    await db.queryAsync(query); 
    console.log('image seed data 6 inserted'); 
  } catch (err) {
    console.log('image seed data 6 did not insert')
  }

  try {
    let query = "insert into images values (default, 7, 'https://bloximages.chicago2.vip.townnews.com/ladowntownnews.com/content/tncms/assets/v3/editorial/d/da/dda25f7e-f3b6-11e6-baf2-5f35cc7ad211/58a4af54159a8.image.jpg')"
    await db.queryAsync(query); 
    console.log('image seed data 7 inserted'); 
  } catch (err) {
    console.log('image seed data 7 did not insert')
  }

  try {
    let query = "insert into images values (default, 8, 'https://medias.spotern.com/spots/w640/74859.jpg')"
    await db.queryAsync(query); 
    console.log('image seed data 8 inserted'); 
  } catch (err) {
    console.log('image seed data 8s did not insert')
  }

  try {
    let query = "insert into images values (default, 9, 'https://i.ytimg.com/vi/jXYFUJgtrIc/hqdefault.jpg')"
    await db.queryAsync(query); 
    console.log('image seed data 9 inserted'); 
  } catch (err) {
    console.log('image seed data 9 did not insert')
  }

  try {
    let query = "insert into images values (default, 10, 'http://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2015/4/29/2/HUHH2015-Privacy_Vacaville_10.jpg.rend.hgtvcom.1280.853.suffix/1430363526389.jpeg')"
    await db.queryAsync(query); 
    console.log('image seed data 9 inserted'); 
  } catch (err) {
    console.log('image seed data 9 did not insert')
  }
}

export const createSeedSkills = async () => {
  try {
    let query = "insert into skills values (default, null, 7, 'Help me be the very best')"; 
    await db.queryAsync(query); 
    console.log('skill seed data 1 inserted')
  } catch (err) {
    console.log('skill seed data 1 did not insert', err)
  }

  try {
    let query = "insert into skills values (default, null, 3, 'Build basic webpage')"; 
    await db.queryAsync(query); 
    console.log('skill seed data 2 inserted')
  } catch (err) {
    console.log('skill seed data 2 did not insert')
  }

  try {
    let query = "insert into skills values (default, null, 4, 'Manual Labor: Paint fence')"; 
    await db.queryAsync(query); 
    console.log('skill seed data 3 inserted')
  } catch (err) {
    console.log('skill seed data 3 did not insert')
  }

  try {
    let query = "insert into skills values (default, null, 5, 'Gardening Expertise')"; 
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
    let query = "insert into skills values (default, null, 2, 'Farmwork, planting pumpkins')"; 
    await db.queryAsync(query); 
    console.log('skill seed data 6 inserted')
  } catch (err) {
    console.log('skill seed data 6 did not insert')
  }

  try {
    let query = "insert into skills values (default, null, 6, 'Cellar concealment')"; 
    await db.queryAsync(query); 
    console.log('skill seed data 7 inserted')
  } catch (err) {
    console.log('skill seed data 7 did not insert')
  }

  try {
    let query = "insert into skills values (default, null, 8, 'Hired muscle')"; 
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