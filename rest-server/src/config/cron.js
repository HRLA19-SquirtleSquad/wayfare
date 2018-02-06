import { setTopListings } from './redis/redis'; 

let CronJob = require('cron').CronJob;

new CronJob('59 59 23 * * *', function() {
  setTopListings(); 
}, null, true, 'America/Los_Angeles');

setTopListings();  

