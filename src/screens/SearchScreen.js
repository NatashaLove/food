import React, { useState, useEffect } from 'react';// hooks- functions to add functionality to a function component
// useEffect- a hook or essentially a function that allows us to run some snippet of code just one time when our component is first rendered to the screen

import { View, Text, StyleSheet, ScrollView} from 'react-native';
//ScrollView enables scrolling vertically if detects too many elements-wrap around what needs to be scrolled thru

import SearchBar from '../components/SearchBar';
//import yelp from '../api/yelp'; // this line was trnsferred to useREsults.js
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


const SearchScreen = () => {

    //term - what we are going to look for:
    const [term, setTerm] = useState(''); //empty string by default
    // UseState anytime that you want any content on the screen to update -
//We're always going to make useState.
  
const [searchApi, results, errorMessage]= useResults();

//console.log(results); - can see what props the item/result has
const filterResultsByPrice = (price) => {
// price === '$'||'$$'|| '$$$' - to filter results:
return results.filter(results => {
    return results.price === price;
})

};


//CODE from here was cut and pasted in file (hooks)-useResults//

//callback functions to the child - when there are changes in the state:
//-to reach search bar from the parent component

    return (
//Flex property can be added to a single child that we're displaying and
// it tells that element to just expand and fill up all the visible available space.
//need flex: 1 - every time to have elements within borders!
    //<View style={{flex: 1}}>- instead just empty <> and </>: (it just groups all elements into screen)
    // <View> just makes it more difficult
    <>
        <SearchBar term={term} 
        onTermChange= {setTerm} //= {newTerm => setTerm(newTerm)} 
        onTermSubmit={() => searchApi(term)} // passing term- current piece of state
        //= {searchApi}
        //passing a reference to the function that should be invoked (omitting parentheses etc)
        />
    
    {errorMessage ? <Text>{errorMessage}</Text> : null
    //if-else - iterinary expression- if true-show <Text>, else- null
    }
    
    <ScrollView>
    <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
    <ResultsList results={filterResultsByPrice('$$')}title="Bit Pricier"/>
    <ResultsList results={filterResultsByPrice('$$$')}title= "Big Spender"/>
    </ScrollView>
    </>
    ); // ScrollView - wrap around elements to be scrolled
};
/*
const styles = StyleSheet.create({
    textStyle: {
        marginLeft: 15 // gives 10 px between images and sides
(was before results: <Text style={styles.textStyle}>We have found {results.length} results</Text>)
        
    }
});
*/

export default SearchScreen;