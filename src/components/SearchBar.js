import React from 'react';
import { View, TextInput, StyleSheet} from 'react-native';//textInput - for user to input
import { Feather } from '@expo/vector-icons';
//the lib is already in nodes- just picking exact style/library - Feather 
//on expo.github.io/vector-icons

//destructorizing properties of the SearchBar({}):
//props help to manage the search bar object from the parent
const SearchBar = ({term, onTermChange, onTermSubmit }) => {

    return <View style={styles.backgroundStyle}>
        <Feather name="search" style= {styles.iconStyle} />
        <TextInput 
        autoCapitalize="none"
        autoCorrect={false} // in case it's proper name - not to autocorrect
        style ={styles.inputStyle} 
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        //the same almost:
        //onChangeText={newTerm => onTermChange(newTerm)}
        //onEndEditing={()=> onTermSubmit()} // when submit button is clicked
        />

    </View>
};
// placeholder - property of textInput (prompt)
//all the style of the search bar:
const styles = StyleSheet.create({

    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#f0eeee',
        height:50,
        borderRadius: 5,// rounded corners
        marginHorizontal: 15,
        flexDirection: 'row' // makes the icon and the text show on the same line   
    },
    inputStyle: {
        //borderColor: 'black',
        //borderWidth: 1,
        flex: 1, // to use as much space as can
        fontSize: 18
    },

    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }

});

export default SearchBar;