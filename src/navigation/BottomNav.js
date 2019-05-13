import { createBottomTabNavigator } from "react-navigation";
import React                        from 'react';
import { Icon }                     from 'native-base';
import { color }                    from '../style';

// Screens
import Home                         from '../pages/Home';
import Profile                      from '../pages/Profile';
import ChatList                     from '../pages/ChatList';

const BottomNav = createBottomTabNavigator({
    ChatList: {
        screen           : ChatList,
        navigationOptions: {
            title        : 'Social',
            tabBarIcon   : ({tintColor}) => (
                <Icon name="people" style={{ color: tintColor }}/>
            )
        }
    },
    Home: {
        screen           : Home,
        navigationOptions: {
            title        : 'Home',
            tabBarIcon   : ({tintColor}) => (
                <Icon name='home' style={{ color: tintColor }}/>
            )
            
        }
    },
    Profile: {
        screen           : Profile,
        navigationOptions: {
            title        : 'Profile',
            tabBarIcon   : ({tintColor}) => (
                <Icon name="person" style={{ color: tintColor }}/>
            )
        }
    }
}, {
    initialRouteName       : 'Home',
    tabBarOptions          : {
        showLabel          : false,
        activeTintColor    : color.black,
        inactiveTintColor  :  color.greyL,
        style: {
            backgroundColor: color.white
        }
    }
})
export default BottomNav