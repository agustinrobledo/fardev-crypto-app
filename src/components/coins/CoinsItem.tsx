import { View, Text, StyleSheet, Pressable, Image } from "react-native";
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
      <View style={styles.statusContainer}>
        <Image
          style={
            Number(coin.percent_change_1h) > 0
              ? styles.upArrow
              : styles.downArrow
          }
          source={
            Number(coin.percent_change_1h) > 0
              ? require("../../../assets/up-arrow.png")
              : require("../../../assets/down-arrow.png")
          }
        />
        <Text style={styles.price}>${Number(coin.price_usd).toFixed(2)}</Text>
      </View>
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
    flex: 3,
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
  upArrow: {
    height: 20,
    width: 20,
    tintColor: colors.green,
  },
  downArrow: {
    height: 20,
    width: 20,
    tintColor: colors.secondary,
  },
  statusContainer: {
    display: "flex",
    flexDirection: "row",
    flex: 2,
    justifyContent: "space-around",
  },
});
