import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../../res/colors";
import type { IFCoin } from "../../types/coins/typeCoins";
import Storage from "../../libs/storage";
import CoinsItem from "../coins/CoinsItem";
import { useNavigation } from "@react-navigation/native";

export default function FavoriteDetailScreen() {
  const navigation = useNavigation();
  const [favoriteCoins, setFavoriteCoins] = useState<IFCoin[]>([]);
  console.log(favoriteCoins);
  useEffect(() => {
    return navigation.addListener("focus", () => loadFavoriteCoins());
  }, [navigation]);

  const loadFavoriteCoins = async () => {
    try {
      const keys = await Storage.instance.getAllFavoriteKeys();
      if (keys?.length) {
        const coins = await Storage.instance.multiGet(keys);
        //@ts-ignore
        const favorites: IFCoin[] = coins.map((item) => JSON.parse(item[1]));
        console.log(favorites);
        setFavoriteCoins(favorites);
      } else {
        setFavoriteCoins([]);
      }
    } catch (error) {}
  };

  const handlePress = (coin: IFCoin) => {
    //@ts-ignore
    navigation.navigate("CoinDetail", { coin });
  };

  return (
    <View style={styles.container}>
      {favoriteCoins.length ? (
        <View>
          <FlatList
            data={favoriteCoins}
            renderItem={({ item }) => (
              <CoinsItem handlePress={() => handlePress(item)} coin={item} />
            )}
          ></FlatList>
        </View>
      ) : (
        <Text style={styles.emptyText}>
          You don't have any favorite coin yet.
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
  },
  emptyText: {
    alignSelf: "center",
    fontSize: 15,
    color: colors.text,
    paddingTop: 30,
  },
});
