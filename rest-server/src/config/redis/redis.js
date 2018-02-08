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
  let topListings = await getTopListingsQuery();
  for (let i = 0; i < 10; i ++) {
    let listing = topListings.rows[i]; 
    if (listing) {
      let image = await getListingImagesQuery(listing.id); 
      client.hset([i, "id", listing.id , "title", listing.title, "city", listing.city, "image", image.rows[0].url], redis.print); 
    }
  }
  //client.quit(); 
  
}

export const getTopListings = async () => {
  const topListings = []; 

    for (let i  = 0; i < 10; i++) {
      let obj = {}; 
      obj.id = await client.hgetAsync(i, "id"); 
      obj.title = await client.hgetAsync(i, "title"); 
      obj.city = await client.hgetAsync(i, "city")
      obj.image = await client.hgetAsync(i, "image"); 
      topListings.push(obj); 
    }
    client.quit(); 
  return topListings; 
}
