import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import FavoriteDetailScreen from "./FavoriteDetailScreen";

const Stack = createNativeStackNavigator();

export default function FavoritesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites Coins"
        options={{
          headerShown: false,
        }}
        component={FavoriteDetailScreen}
      />
    </Stack.Navigator>
  );
}
