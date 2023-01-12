import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import FavoriteDetailScreen from "./FavoriteDetailScreen";
import colors from "../../res/colors";

const Stack = createNativeStackNavigator();

export default function FavoritesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites Coins"
        options={{
          headerStyle: { backgroundColor: colors.background },
          headerTitleAlign: "center",
          headerTintColor: colors.text,
        }}
        component={FavoriteDetailScreen}
      />
    </Stack.Navigator>
  );
}
