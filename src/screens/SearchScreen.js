import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';//in any component that needs to access the Yelp API we can import this file and immediately accessthe Yelp API without having to redesign it

const SearchScreen = () => {

    //term - what we are going to look for:
    const [term, setTerm] = useState(''); //empty string by default
    // UseState anytime that you want any content on the screen to update -
//We're always going to make useState.
    const  [results, setResults]= useState([]); // to handle results after the search
//initialize with empty array - because expecting many objects-big array
//: amount of objects and their properties

// if we want detect when an error occurs and update what is visible or show the error message to the user -
//it means we need to add in a new state variable:
    const [errorMessage, setErrorMessage]= useState('');//initial- empty

//helper function to initiate the request:
    const searchApi = async ()=> {
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
                    term, //term: term,
                    location: 'san jose'
                }
    
            }); // access the route (from yelp.js)
           
    //anytime we want to update some piece of state -which is where we're going to store the search results we'll use the setter:       
            setResults (response.data.businesses);

        } catch (err){
            setErrorMessage('Something went wrong..')
        }
       
    };


    //callback functions to the child - when there are changes in the state:
   //-to reach search bar from the parent component
    return (
     <View>
        <SearchBar term={term} 
        onTermChange= {setTerm} //= {newTerm => setTerm(newTerm)} 
        onTermSubmit= {searchApi} //={() => searchApi()}
        //passing a reference to the function that should be invoked (omitting parentheses etc)
        />
    
    {errorMessage ? <Text>{errorMessage}</Text> : null
    //if-else - iterinary expression- if true-show <Text>, else- null
    }
    <Text>We have found {results.length} results</Text>


    </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;