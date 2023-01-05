import { useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import colors from "../../res/colors";
import CoinDetailScreen from "./CoinDetailScreen";
import CoinsScreen from "./CoinsScreen";

const Stack = createNativeStackNavigator();
export default function CoinStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Crypto Tracker"
        component={CoinsScreen}
        options={{
          headerStyle: { backgroundColor: colors.primary },
          headerTitleAlign: "center",
          headerTintColor: colors.text,
        }}
      />
      <Stack.Screen
        name="CoinDetail"
        component={CoinDetailScreen}
        options={({ route }) => ({
          title: route.params.coin.name,
          headerStyle: { backgroundColor: colors.secondary },
          headerTitleAlign: "center",
          headerTintColor: colors.text,
        })}
      />
    </Stack.Navigator>
  );
}
