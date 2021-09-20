import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login';
import Home from '../pages/Home';


const Stack = createStackNavigator();

export default function Navigation()
{


  return (

  <Stack.Navigator>

    <Stack.Screen name="Login" 
      component={Login}
      options={
          {
            headerShown: false
          }  
        }  
    />

    <Stack.Screen 
      name="Home" 
      component={Home}
      options={
          {
           // headerShown: false,
            title:null ,
            headerLeft: null,
            headerStyle: {
              backgroundColor:'#D98E04',
              height:30,    
            },
             
          }  
        }  
    />

  </Stack.Navigator>


  );


}

