import React, { Component }             from 'react';
import { createAppContainer }           from 'react-navigation';
import { Provider }                     from 'react-redux';
import AppNavigator                     from './src/navigation/index';
import store                            from './src/store';
import NavigationHelper                 from './src/helpers/navigation';

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={ store } >
          <AppContainer
            ref = { navigatorRef => { NavigationHelper.setNavigator(navigatorRef) }}
          />
      </Provider>
    );
  }
}
