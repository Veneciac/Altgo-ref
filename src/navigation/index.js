import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { Animated, Easing }                          from 'react-native';
import BottomNav                                     from './BottomNav';
import Signin                                        from '../pages/SignIn';
import Regis                                         from '../pages/Registration';
import AddFriend                                     from '../pages/AddFriend';
import PendingHangout                                from '../pages/PendingHangout';
import GroupRoute                                    from '../pages/GroupRoute';
import RouteOptimizer                                from '../pages/RouteOptimizer';
import TravelMap                                     from '../pages/TravelMap';

const SwitchNav = createSwitchNavigator({
    App            : BottomNav,
    Auth           : Signin,
    Regis          : Regis,
    SignIn         : Signin,
    AddFriend,
    PendingHangout,
    GroupRoute,
    RouteOptimizer,
    TravelMap,
}, {
    initialRouteName: 'Auth',
    headerMode          : 'none',
    transitionConfig    : () => ({
        transitionSpec: {
            duration: 300,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
        },
        screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps;
            const { index } = scene;

            const width = layout.initWidth;
            const translateX = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [width, 0, 0],
            });

            const opacity = position.interpolate({
                inputRange: [index - 1, index - 0.99, index],
                outputRange: [0, 1, 1],
            });
            
            return { opacity, transform: [{ translateX }] };
        },
    }),
})


export default createAppContainer(SwitchNav)