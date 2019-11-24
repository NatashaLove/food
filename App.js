//need to import libraries separately :
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import { createStackNavigator, createAppContainer} from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';


//navigator between screens - has 2 args (objects):
const navigator = createStackNavigator ({

Search: SearchScreen
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