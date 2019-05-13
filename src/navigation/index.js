import { createAppContainer, createSwitchNavigator } from "react-navigation";
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
    initialRouteName: 'Auth'
})


export default createAppContainer(SwitchNav)