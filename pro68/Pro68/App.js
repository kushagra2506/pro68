import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import fbScreen from './fbScreen'
import inScreen from './inScreen'



export default class App extends React.Component{
render(){
return(
  <AppContainer/>
)
}
}

const TabNavigator = createBottomTabNavigator({
Facebook : {screen:fbScreen},
Instagram : {screen:inScreen},
})

const AppContainer = createAppContainer(TabNavigator);
