import { createStackNavigator } from "react-navigation";
import { color }                from '../style';

// Screens
import ChatList                 from '../pages/ChatList';

const FriendNav = createStackNavigator({
    Friend               : {
        screen           : ChatList,
        navigationOptions: {
            title        : 'Social',
            tabBarIcon   : ({tintColor}) => (
                <Icon name="people" style={{ color: tintColor }}/>
            )
        }
    }
}, {
    initialRouteName       : 'Friend',
    tabBarOptions          : {
        showLabel          : false,
        activeTintColor    : color.white,
        inactiveTintColor  : color.grey,
        style              : {
            backgroundColor: color.black
        }
    }
})
export default FriendNav