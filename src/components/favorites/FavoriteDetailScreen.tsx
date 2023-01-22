import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../../res/colors";
import type { IFCoin } from "../../types/coins/typeCoins";
import Storage from "../../libs/storage";

export default function FavoriteDetailScreen() {
  const [favoriteCoins, setFavoriteCoins] = useState<IFCoin[]>([]);
  useEffect(() => {
    loadFavoriteCoins();
  }, []);

  const loadFavoriteCoins = async () => {
    try {
      const keys = await Storage.instance.getAllFavoriteKeys();
      if (keys?.length) {
        const coins = await Storage.instance.multiGet(keys);
        console.log(coins);
        setFavoriteCoins(coins);
      }
      console.log(keys);
    } catch (error) {}
  };
  return (
    <View style={styles.container}>
      <Text style={styles.emptyText}>
        You don't have any favorite coin yet.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    paddingTop: 30,
  },
  emptyText: {
    alignSelf: "center",
    fontSize: 15,
    color: colors.text,
  },
});
