import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import PrevecaoScreen from "../screens/PrevecaoScreen";
import SobreScreen from "../screens/SobreScreen";
import CororaScreen from "../screens/CororaScreen";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {
  //navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Estatísticas",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-pie" />
          )
        }}
      />
      <BottomTab.Screen
        name="Links"
        component={PrevecaoScreen}
        options={{
          title: "Prevenção",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-medkit" />
          )
        }}
      />

      <BottomTab.Screen
        name="Corona"
        component={CororaScreen}
        options={{
          title: "COVID-19",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-nuclear" />
          )
        }}
      />

      <BottomTab.Screen
        name="Info"
        component={SobreScreen}
        options={{
          title: "Sobre?",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-help-circle" />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}
