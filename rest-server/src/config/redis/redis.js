import redis from 'redis';
import Promise from 'bluebird'; 
import { getTopListingsQuery, getListingImagesQuery } from '../../components/listings/listingsQuery'; 

const client = redis.createClient();

Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);  

client.on("connect", function () {
  console.log('redis connected');
});

client.on("error", function (err) {
    console.log("Error " + err);
});

export const setTopListings = async () => {
  client.flushall(); 
  let topListings = await getTopListingsQuery();
  for (let i = 0; i < 10; i ++) {    
    let listing = topListings.rows[i]; 
    if (listing) {
      let image = await getListingImagesQuery(listing.id); 
      let imageURL = image.rows[0] ? image.rows[0].url : ''; 
      client.hset(i, 'id', listing.id)
      client.hset(i, "title", listing.title)
      client.hset(i, "city", listing.city)
      client.hset(i, "image", imageURL)
      client.hset(i, "startdate", listing.startdate)
      client.hset(i, "enddate", listing.enddate)      
    }
  } 
}

export const getTopListings = async () => {
  const topListings = []; 
    
    for (let i  = 0; i < 10; i++) {
      let obj = {}; 
      obj.id = await client.hgetAsync(i, "id"); 
      obj.title = await client.hgetAsync(i, "title"); 
      obj.city = await client.hgetAsync(i, "city")
      obj.image = await client.hgetAsync(i, "image"); 
      obj.startdate = await client.hgetAsync(i, "startdate"); 
      obj.enddate = await client.hgetAsync(i, "enddate"); 
      topListings.push(obj); 
    }
  return topListings; 
}
