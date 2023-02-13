import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import React, { useCallback } from "react";
import { Image } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import CoinStack from "./src/components/coins/CoinsStack";
import FavoritesStack from "./src/components/favorites/FavoritesStack";
import colors from "./src/res/colors";

const Tabs = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Violet Sans": require("./assets/VioletSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const myTheme = {
    dark: false,
    colors: {
      background: "transparent",
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
          options={{
            headerShown: false,
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.text,
            tabBarIcon: ({ color }) => (
              <Image
                style={{ width: 20, height: 20, tintColor: color }}
                source={require("./assets/home.png")}
              />
            ),
          }}
          name="Coins"
          component={CoinStack}
        />
        <Tabs.Screen
          options={{
            headerShown: false,
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.text,
            tabBarIcon: ({ color }) => (
              <Image
                style={{ width: 20, height: 20, tintColor: color }}
                source={require("./assets/favorites.png")}
              />
            ),
          }}
          name="Favorites"
          component={FavoritesStack}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
