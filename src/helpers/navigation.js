import { StackActions, NavigationActions } from 'react-navigation';

class NavigationHelper {
    static _navigator;

    static constant = {
       ADD_FRIEND      : 'AddFriend',
       CHAT_LIST       : 'ChatList',
       CHAT_ROOM       : 'ChatRoom',
       GROUP_ROUTE     : 'GroupRoute',
       HOME            : 'Home',
       PENDING_HANGOUT : 'PendingHangout',
       PROFILE         : 'Profile',
       REGISTRATION    : 'Regis',
       ROUTE_OPTIMIZER : 'RouteOptimizer',
       SIGN_IN         : 'SignIn',
       TRAVEL_MAP      : 'TravelMap'
    }

    static setNavigator(ref){
        return this._navigator = ref;
    }

    static reset(route, params = {}){
        if(this._navigator){
            this._navigator.dispatch(StackActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ 
                        routeName: route,
                        params: params
                    })
                ]
            }));
        }
    }

    static navigate(route,params = {}){
        if(this._navigator){
            this._navigator.dispatch(NavigationActions.navigate({
                routeName   : route,
                params      : params
            }));
        }
    }

    static goBack(key){
        if(this._navigator){
            this._navigator.dispatch(StackActions.pop({
                n: key ? key : 1,
            }));
        }
    }

    static goBackToTop(){
        if(this._navigator){
            this._navigator.dispatch(StackActions.popToTop());
        }
    }

}

export default NavigationHelper;