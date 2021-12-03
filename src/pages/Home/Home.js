import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListSuporte from "../Form/FormSuporte/ListSuporte";
import { StyleSheet, Animated } from "react-native";

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Suporte"
        component={ListSuporte}
        options={{
          headerShown: false,
          backgroundColor: "black",
        }}
      />

      <Tab.Screen
        name="Instalação"
        size={50}
        component={ListSuporte}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEA443",
  },

  text: {
    marginLeft: 15,
    fontSize: 20,
    color: "black",
  },

  bnt: {
    margin: 5,
    marginLeft: "5%",
    marginRight: "5%",
    padding: 20,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 7,
    backgroundColor: "#FFF",
  },
});
