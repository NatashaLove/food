//need to import libraries separately :
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import { createStackNavigator, createAppContainer} from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import ResultsDetail from './src/components/ResultsDetail';

//createStackNavigator Provides a way for your app to transition between screens where each new screen is placed on top of a stack
//navigator between screens - has 2 args (objects):
const navigator = createStackNavigator ({

Search: SearchScreen,
ResultsShow: ResultsShowScreen
}, 
// second objects has 2 options:
{
initialRouteName: 'Search',
defaultNavigationOptions: { //can be used to customize the header (shows on every screen)
  title: 'Business Search'

}

});

//must export the component (real - make sure)
// this function creates app component- and displays the content of navigator:
export default createAppContainer(navigator);

//how we connect screens:
//we take out 'navigate' function from our props object (console.log (props)) 
//and then pass it down to the appropriate child components where it can be made use of in the correct location-
//so it can be called only when a user taps on the actual restaurant(link)