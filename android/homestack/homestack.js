import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import Contents from '../screens/contents';




const AppNavigator = {
    Home: {
        screen: Home
    },
    contents: {
        screen: Contents
    },
}

const Homestack = createStackNavigator(AppNavigator);

export default createAppContainer(Homestack)
