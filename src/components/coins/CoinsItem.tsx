import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { IFCoin } from "../../types/coins/typeCoins";
import colors from "../../res/colors";

type coinsItemTypeProps = {
  coin: IFCoin;
  handlePress: () => void;
};

export default function CoinsItem({ coin, handlePress }: coinsItemTypeProps) {
  return (
    <Pressable onPress={handlePress} style={styles.itemContainer}>
      <Text style={styles.symbol}>{coin.symbol}</Text>
      <Text style={styles.name}>{coin.name}</Text>
      <Text style={styles.price}>${Number(coin.price_usd).toFixed(2)}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 4,
    backgroundColor: colors.background,
    color: colors.text,
  },
  symbol: {
    color: colors.text,
    flex: 1,
    fontSize: 16,
  },
  name: {
    color: colors.text,
    flex: 2,
    fontSize: 16,
  },
  price: {
    color: colors.text,
    flex: 1,
    fontSize: 18,
  },
  positiveChange: {
    fontSize: 15,
    color: colors.text,
  },
});
