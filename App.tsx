import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import CoinStack from "./src/components/coins/CoinsStack";
import colors from "./src/res/colors";

export default function App() {
  const myTheme = {
    dark: false,
    colors: {
      background: colors.background,
      primary: "rgb(255, 45, 85)",
      card: "rgb(255, 255, 255)",
      text: "rgb(28, 28, 30)",
      border: "rgb(199, 199, 204)",
      notification: "rgb(255, 69, 58)",
    },
  };
  return (
    <NavigationContainer theme={myTheme}>
      <CoinStack />
    </NavigationContainer>
  );
}
