import { setTopListings } from './redis/redis.js'; 
let CronJob = require('cron').CronJob;

new CronJob('59 59 23 * * *', function() {
  console.log('You will see this message every second');
  setTopListings(); 
}, null, true, 'America/Los_Angeles');

setTopListings();  

console.log('done')