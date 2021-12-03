import React from "react";
import { View } from "react-native";
import { useEffect } from "react";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Navigation from "./src/components/Navigation";
import { GlobalUseProvider } from "./src/components/GlobalUse.js";

export default function App() {
  //função ignorar boxlogs do Animated
  useEffect(() => {
    LogBox.ignoreLogs(["Animated: `useNativeDriver`"]);
  }, []);

  const Stack = createStackNavigator();

  return (
    <GlobalUseProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </GlobalUseProvider>
  );
}
