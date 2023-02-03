import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, Image, SafeAreaView, StyleSheet, Text, View, ViewComponent, AppRegistry } from 'react-native';
//import pic from './assets/favicon.png'

import { Provider } from 'react-redux';
import store from './reducers/store';

// import Register from './components/Register';
import MainScreen from './components/MainScreen';
import {A} from 'expo'
import {name as appName} from './app.json'
import Initialize from './components/Initialize';
// import SensorActuator from './components/SensorActuator';
import Picture from './components/StatusCreate_copy';
import StatusCreate from './components/StatusCreate'
import ModelInfo from './components/ModelInfo';
import { Dimensions } from 'react-native'
const vw=Dimensions.get('window').width
const vh=Dimensions.get('window').height
const scale=Dimensions.get('window').scale

/* 
  1)Add a API for checking if  the database changed
  2)Add a scrollabe view to display contacts
  3)Make each user available for chat initiation
  4)Add a ofline feature by downloading data from the server to the device

*/
const ip="localhost";
export default function App() {
  // AppRegistry.registerComponent(appName,()=>App);
  const [state,setState]=useState(0);
  // const [bstate,setBstate]=useState(0);
 
  

  useEffect(()=>{
    setInterval(()=>{
      //console.log(store.getState().State)
      try {
        setState(store.getState().State);
      } catch (error) {
        console.log(error)
      }
      // setBstate(store.getState().bState);
      // apiCall("chats");
      // apiCall("contacts");
    },100)

  },[])
  var x=0;
  return (
    <Provider store={store}>

    <SafeAreaView style={styles.container}>
      {/* {(state===0)?<Initialize />:(state===1)?<MainScreen />:(state===2)?<ModelInfo />:(state===4)?<StatusCreate />:<Initialize />} */}
      {/* <MainScreen /> */}
      {/* <ModelInfo /> */}
      <StatusCreate />
      
       {/* <Picture /> */}
      
    </SafeAreaView>
    </Provider>

  );
}
  
const styles = StyleSheet.create({

  container: {
    backgroundColor: 'green',
    position:"relative",
    flexDirection:"column",
    alignItems:"center",
    height:vh,
    display:'flex',
  },
 
});
