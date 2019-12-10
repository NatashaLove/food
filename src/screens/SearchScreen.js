import React, { useState, useEffect } from 'react';// hooks- functions to add functionality to a function component
// useEffect- a hook or essentially a function that allows us to run some snippet of code just one time when our componentis first rendered to the screen

import { View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
//import yelp from '../api/yelp'; // this line was trnsferred to useREsults.js
import useResults from '../hooks/useResults';

const SearchScreen = () => {

    //term - what we are going to look for:
    const [term, setTerm] = useState(''); //empty string by default
    // UseState anytime that you want any content on the screen to update -
//We're always going to make useState.
  
const [searchApi, results, errorMessage]= useResults();

//CODE from here was cut and pasted in file (hooks)-useResults//

    //callback functions to the child - when there are changes in the state:
   //-to reach search bar from the parent component
    return (
     <View>
        <SearchBar term={term} 
        onTermChange= {setTerm} //= {newTerm => setTerm(newTerm)} 
        onTermSubmit={() => searchApi(term)} // passing term- current piece of state
        //= {searchApi}
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