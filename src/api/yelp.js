//different api - different files
//if we might have multiple different API that we want to work with
// inside of our project we will create several different files inside this API directory 
//inside of each one we will import axios-  will then create an instance of axios and 
//pre configure it to where have it work with some specific API:

import axios from 'axios';

//add in the ability to make a request to the Yelp API- with axios
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',   //where making request to - search route is in the documentation on yelp:
    headers: {
        Authorization: 'Bearer H_Zdea3JhKYdcRjuJo3qTDJR4PKOmWz5iJZA_uQyOSd1FoCWCoiCRnps0uBQDjPoL4oM9OsRnUrOkNmEFa2FjbCZlLdPlG5qYKftGT2fOC7cpa4UCSUjNJNTPdnNXXYx' 
        //copy API key from yelp-my app-manage app- after Bearer and space

    }

}); 

//yelp.get('/search')// to get the route without all address line

//So now in any component that needs to access the Yelp API we can import this file and immediately accessthe Yelp API without having to redesign it