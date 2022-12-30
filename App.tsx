import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import CoinStack from "./src/components/coins/CoinsStack";

export default function App() {
  return (
    <NavigationContainer>
      <CoinStack />
    </NavigationContainer>
  );
}
