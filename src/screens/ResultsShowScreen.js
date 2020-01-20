// create a separate screen component and then wire it up to our stack navigator 
//so that a user can navigate to it anytime they tap on one of these different restaurants.
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ResultsDetail from '../components/ResultsDetail';

const ResultsShowScreen = () => {
return (
<View>
    <Text>Results Show</Text>
</View>
);

};

const styles = StyleSheet.create({});

export default ResultsShowScreen;