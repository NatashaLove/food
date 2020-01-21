import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
//flatlist element from React Native.We use it anytime we want to show a scroll list of data to our user.
import ResultsDetail from './ResultsDetail';
import {withNavigation} from 'react-navigation';

//creating the component with view and style- 
//in search screen create 3 instances of it
const ResultsList = ({title, results, navigation})=> {
// (props), but in particular - ({})- like ({title}), results - what props is in the instances in searchscreen    

//{title} below in {}- because it's javascript var inside jsx- the var  will take its own arg in each instance
//-s0 will show different results


//results.length - how many results

// I want this list to render itself horizontally; 
//by default a flat list renders itself vertically or top to bottom.
//So to show our list of items from left to right we add in a prop-horizontal:
    return (
     <View style={styles.container}>
        <Text style = {styles.title}>{title}</Text>
        <FlatList
            
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result)=> result.id}
            renderItem= {({item}) =>{
                //item === result object
                //on the screen:
                return (
//to wrap with a touchable opacity- and then on touchable opacity we can add in our onPress callback.
//So going to pass to it Arrow function- anytime a user taps on anything enclosed by this touchable opacity 
//we're gonna call navigation.navigate (function of navigation obj) -and pass in a string telling react or the stack navigator what screen to navigate to.

                    <TouchableOpacity onPress={()=> navigation.navigate('ResultsShow')} // ResultsShow - name of screen in the app.js
                    >
                    <ResultsDetail result={item} />
                    </TouchableOpacity>
                );
                //passing the component to return results (adding additional props)
            }}

        />
        
    </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        left: 15, // === marginLeft: 10
        marginBottom: 5
        },
        container: {
            marginBottom: 10
        }
        
 });

export default withNavigation (ResultsList);
//we're no longer exporting results less directly. not just return: ResultsList - now it's wrapped
//Instead we are exporting a special version of resultsList with extra functionality 
//That'll give resultsList access to navigation.