import { useEffect, useState} from 'react';
import yelp from '../api/yelp';//in any component that needs to access the Yelp API we can import this file and immediately accessthe Yelp API without having to redesign it

export default () => {

    const  [results, setResults]= useState([]); // to handle results after the search
    //initialize with empty array - because expecting many objects-big array
    //: amount of objects and their properties
    
    // if we want detect when an error occurs and update what is visible or show the error message to the user -
    //it means we need to add in a new state variable:
        const [errorMessage, setErrorMessage]= useState('');//initial- empty
    
    //helper function to initiate the request:
        const searchApi = async (searchTerm)=> {
            //to handle search results - add async func and await - await cn't be used without async!
    /*
    to simplify our code a little bit we can turn search API into an async function by
    adding in that async keyword right there we can then use the await syntax inside this function -
     so we're going to essentially wait for some requests or some response to come back.
      once this thing resolves with some actual data we will assign the result to the response variable-
       that we get back from an axios request is going to have a dot data property on it.
     dot data property will be the actual - data that we got back from that API.
    response.data is going to be this whole big object (all business properties)-that we see inside the Yelp documentation-
    so we use .businesses - because that's all we need
    */
    
    //error handling:
            try{
                const response = await yelp.get('/search', {
                    //first arg - the route
                    //second arg - params -for search results 
                    params: {
                        limit: 50,//how many results will show
                        term: searchTerm, //will run api request with this argument
                        location: 'san jose'
                    }
        
                }); // access the route (from yelp.js)
               
        //anytime we want to update some piece of state -which is where we're going to store the search results we'll use the setter:       
                setResults (response.data.businesses);
    
            } catch (err){
                setErrorMessage('Something went wrong..')
            }
           
        };
        
    useEffect (() => {
        searchApi ('borsch'); // the function which is used only 1 time
    }, []);
    //a zero function as the first argument and an empty array as the second
    //empty array [] - makes the code run only once.
     // when we want to do some initial state change inside of our component we're
    //never going to just call a function directly inside of our component- it may result in infinite loop:
    //call search API when component is first rendered  --BAD CODE --
       // searchApi('pasta'); //starts not empty, but with results initially


//return those three variables that we need inside of an array from JSX block:
//searchAPI, result, errorMessage:
return [searchApi, results, errorMessage];
//now this code (useResults) can be used in other place
};