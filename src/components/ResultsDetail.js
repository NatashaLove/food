// give details here which should be in rthe result
import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
//Image allows use image - prop: image_url (where react tries to get it from)
//adding/receiving prop 'result' (===business obj with all its props)
const ResultsDetail = ({result})=> {

    return(
//{{}}- mean: the outer{} means we're about to refer to a javascript expression 
//and the inner one{} is forming the actual object that we want to pass.
//uri: prop - string for the address/path of the image
        <View>
            <Image style={styles.image} source={{ uri:result.image_url }} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviwes </Text>
        </View>
    );
};

//the issue when we show an image element by default-Usually we're not going to see anything 
// because image is going to try to collapse itself unless we set some kind of fixed height or with to it
// so we need to add in an additional style to our style sheet and apply it to that image element:a new section called 'image':

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
//border radius can be used to round off the corners of an element:
        borderRadius:4
    },
    name: {
        fontWeight: 'bold',
        //fontSize: 16
    }

});

export default ResultsDetail;