// create a separate screen component and then wire it up to our stack navigator 
//so that a user can navigate to it anytime they tap on one of these different restaurants.
import React, { useState, useEffect } from 'react';
//So we need to create a new State variable inside of this component that's going to hold onto this response which we get back from the Yelp API
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';// Image class - to show images
//FlatList - to display the result: list of elements (pics)
import ResultsDetail from '../components/ResultsDetail';
import yelp from '../api/yelp';
//need to use that Yelp instance (or the Axios instance) inside of our API: Yelp.js file

const ResultsShowScreen = ({navigation}) => {
// needs to accept 'navigation' prop in order to get that information inside of results show screen
//'result' originally = null
const [result, setResult] = useState(null);// result - new piece of state/ null - no data available (before request)
const id = navigation.getParam('id');//to get some information out of that second argument that we called navigate with (id)
//assign that info about real id to a variable 'id'
//use ID to make a request to the Yelp API.

//console.log(id); - shows id # of the business
//console.log(result); // details of particular restaurant

//we're going to call getResults and we're going to pass in the I.D. that we want to retrieve:
const getResult = async (id) => {
// use the async await syntax - to make a request - use back ticks : `/${id}`
// because of using the 'await' keyword inside this function-need also mark the function as 'async' 
// so now this is going to give us a response object: 
//helper function that we need to call inside this component:
    const response = await yelp.get(`/${id}`); //call it only once, or will open many API requests to yelp
// to call the func only once - need useEffect hook-but need with it the second arg :'[]' below..

    //response.data - use it to update our result piece of state
    setResult(response.data); //data that we actually care about

};

useEffect (() => {

//args: 1)call get results and pass them the I.D. retrieved from our navigation parameter; 2) empty arr: '[]'   
    getResult(id);
}, []);

//error check:
if (!result){
    return null;
// if there is no result yet ('result' is null)- return null= do not show anything on the screen 
//until we get some kind of result.
// we can add some error handling to show an error message instead of just 'null'.    
}

return (
<View>
    <Text>{result.name}</Text> 
    <FlatList
    data={result.photos}// arr of strings
    keyExtractor={(photo) => photo}// photo - is a string (url of the img)-unique string - that's why it's key and return
    renderItem= {({item}) => {
// 'item' property is going to be the actual photo string (U.R.L. of the photo we're trying to show)
        return <Image style={styles.image} source={{ uri:item}} />
    }}// {{}}- outer to show it's javascript, inner - the actual obj
    />
    </View>
);

};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
});

export default ResultsShowScreen;