import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import colors from "../../res/colors";
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
          headerTintColor: "white",
        }}
      />
    </Stack.Navigator>
  );
}
