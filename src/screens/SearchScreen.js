import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {

    //term - what we are going to look for:
    const [term, setTerm] = useState(''); //empty string by default


    //callback functions to the child - when there are changes in the state:
   //-to reach search bar from the parent component
    return (
     <View>
        <SearchBar term={term} 
        onTermChange = {newTerm => setTerm(newTerm)} 
        onTermSubmit={() => console.log('term was submitted')}
        />
        <Text>Search Screen</Text>
        <Text>{term}</Text>


    </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;