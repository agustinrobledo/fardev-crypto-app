//@ts-nocheck
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import colors from "../../res/colors";
import CoinDetailScreen from "../coin/CoinDetailScreen";
import CoinsScreen from "./CoinsScreen";

const Stack = createNativeStackNavigator();
export default function CoinStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Crypto Tracker"
        component={CoinsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CoinDetail"
        component={CoinDetailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
