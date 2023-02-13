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
          cardStyle: {
            backgroundColor: colors.pink.light,
          },
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CoinDetail"
        component={CoinDetailScreen}
        options={({ route }) => ({
          title: route.params.coin.name,
          headerStyle: { backgroundColor: colors.background },
          headerTitleAlign: "center",
          headerTintColor: colors.text,
        })}
      />
    </Stack.Navigator>
  );
}

// How to change screen backgroundColor in specific screen of stack.screen?
