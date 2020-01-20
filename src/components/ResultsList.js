import React from 'react';
import {View, Text, StyleSheet, FlatList } from 'react-native';
//flatlist element from React Native.We use it anytime we want to show a scroll list of data to our user.
//creating the component with view and style- 
//insearch screen create 3 instances of it
const ResultsList = ({title, results})=> {
// (props), but in particular - ({})- like ({title}), results - what props is in the instances in searchscreen    

//{title} below in {}- because it's javascript var inside jsx- the var  will take its own arg in each instance
//-s0 will show different results


//results.length - how many results

// I want this list to render itself horizontally; 
//by default a flat list renders itself vertically or top to bottom.
//So to show our list of items from left to right we add in a prop-horizontal:
    return <View>
        <Text style = {styles.title}>{title}</Text>
        <FlatList
            horizontal={true}
            data={results}
            keyExtractor={(result)=> result.id}
            renderItem= {({item}) =>{
                //item === result object
                //on the screen:
                return <Text>{item.name}</Text>;
            }}

        />
        
    </View>
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }

});

export default ResultsList;