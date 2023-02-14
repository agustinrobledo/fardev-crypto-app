import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React from "react";
import { IFCoin } from "../../types/coins/typeCoins";
import colors from "../../res/colors";

type coinsItemTypeProps = {
  coin: IFCoin;
  handlePress: () => void;
  backgroundColor: string;
  color: string;
};

export default function CoinsItem({
  coin,
  handlePress,
  backgroundColor,
  color,
}: coinsItemTypeProps) {
  return (
    <Pressable
      onPress={handlePress}
      style={[styles.itemContainer, { backgroundColor: backgroundColor }]}
    >
      <Text style={[styles.symbol, { color: color }]}>{coin.symbol}</Text>
      <Text style={[styles.name, { color: color }]}>{coin.name}</Text>
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
        <Text style={[styles.price, { color: color }]}>
          ${Number(coin.price_usd).toFixed(2)}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 15,
    marginVertical: 5,
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
  },
  symbol: {
    color: colors.purple.dark,
    fontFamily: "Violet Sans",
    flex: 1,
    fontSize: 16,
  },
  name: {
    color: colors.purple.dark,
    flex: 3,
    fontFamily: "Violet Sans",
    fontSize: 16,
  },
  price: {
    color: colors.purple.dark,
    fontFamily: "Violet Sans",
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
    tintColor: colors.green.dark,
  },
  downArrow: {
    height: 20,
    width: 20,
    tintColor: colors.red.dark,
  },
  statusContainer: {
    display: "flex",
    flexDirection: "row",
    flex: 2,
    justifyContent: "space-around",
  },
});
