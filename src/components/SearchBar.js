import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';
//the lib is already in nodes- just picking exact style/library - Feather 
//on expo.github.io/vector-icons

const SearchBar = () => {

    return <View style={styles.background}>
        <Feather name="search" size={30} />
        <Text>Search Bar</Text>


    </View>
};

const styles = StyleSheet.create({

    background: {
        backgroundColor: '#f0eeee',
        height:50,
        borderRadius: 5,// rounded corners
        marginHorizontal: 15
    }

});

export default SearchBar;