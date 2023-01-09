import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import CoinStack from "./src/components/coins/CoinsStack";
import FavoritesStack from "./src/components/favorites/FavoritesStack";
import colors from "./src/res/colors";

const Tabs = createBottomTabNavigator();

export default function App() {
  const myTheme = {
    dark: false,
    colors: {
      background: colors.background,
      primary: "rgb(255, 45, 85)",
      card: colors.background,
      text: "rgb(28, 28, 30)",
      border: "rgb(199, 199, 204)",
      notification: "rgb(255, 69, 58)",
    },
  };
  return (
    <NavigationContainer theme={myTheme}>
      <Tabs.Navigator>
        <Tabs.Screen
          options={{ headerShown: false }}
          name="Coins"
          component={CoinStack}
        />
        <Tabs.Screen
          name="Favorites"
          options={{ headerShown: false }}
          component={FavoritesStack}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
