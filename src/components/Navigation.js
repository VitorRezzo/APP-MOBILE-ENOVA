import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import DetailSuport from "../pages/Form/FormSuporte/DetailSuport";
import DetailInstall from "../pages/Form/FormInstalacao/DetailInstall";
import RelatorioSuporte from "../pages/Form/FormSuporte/RelatorioSuporte";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          // headerShown: false,
          title: null,
          headerLeft: null,
          headerStyle: {
            backgroundColor: "#D98E04",
            height: 30,
          },
        }}
      />

      <Stack.Screen
        name="DetailSuport"
        component={DetailSuport}
        options={{
          // headerShown: false,
          title: null,
          headerLeft: null,
          headerStyle: {
            backgroundColor: "#D98E04",
            height: 30,
          },
        }}
      />

      <Stack.Screen
        name="DetailInstall"
        component={DetailInstall}
        options={{
          // headerShown: false,
          title: null,
          headerLeft: null,
          headerStyle: {
            backgroundColor: "#D98E04",
            height: 30,
          },
        }}
      />

      <Stack.Screen
        name="RelatorioSuporte"
        component={RelatorioSuporte}
        options={{
          // headerShown: false,
          title: null,
          headerLeft: null,
          headerStyle: {
            backgroundColor: "#D98E04",
            height: 30,
          },
        }}
      />
    </Stack.Navigator>
  );
}
