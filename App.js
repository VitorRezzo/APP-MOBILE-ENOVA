import React from 'react';
import Login from './src/pages/Login';
import {View} from "react-native";
import {useEffect} from "react";
import { LogBox } from 'react-native';


export default function App() {
  
//função ignorar boxlogs amarelos
useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
}, [])


  return (
      <Login/>
  );
}


