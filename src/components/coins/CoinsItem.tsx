import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { IFCoin } from "../../types/coins/typeCoins";
import colors from "../../res/colors";

type coinsItemTypeProps = {
  coin: IFCoin;
};

export default function CoinsItem({ coin }: coinsItemTypeProps) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.symbol}>{coin.symbol}</Text>
      <Text style={styles.name}>{coin.name}</Text>
      <Text style={styles.price}>${Number(coin.price_usd).toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 4,
    backgroundColor: colors.background,
    color: "white",
  },
  symbol: {
    color: "white",
    flex: 1,
    fontSize: 16,
  },
  name: {
    color: "white",
    flex: 2,
    fontSize: 16,
  },
  price: {
    color: "white",
    flex: 1,
    fontSize: 18,
  },
  positiveChange: {
    fontSize: 15,
    color: "white",
  },
});
