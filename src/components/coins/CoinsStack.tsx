import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CoinsScreen from "./CoinsScreen";

const Stack = createNativeStackNavigator();
export default function CoinStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Coins" component={CoinsScreen} />
    </Stack.Navigator>
  );
}
