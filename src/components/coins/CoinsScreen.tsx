import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Http from "../../libs/http";
import type { IFCoin } from "../../types/coins/typeCoins";
import CoinsItem from "./CoinsItem";
import { useNavigation } from "@react-navigation/native";
import colors from "../../res/colors";
import SearchCoin from "./SearchCoin";

export default function CoinsScreen() {
  const navigation = useNavigation();
  const [coins, setCoins] = useState<IFCoin[]>([]);
  const [allCoins, setAllCoins] = useState<IFCoin[]>([]);

  useEffect(() => {
    loadCoins();
  }, []);

  const loadCoins = async () => {
    try {
      const res = await Http.instance.get(
        "https://api.coinlore.net/api/tickers/"
      );
      setCoins(res);
      setAllCoins(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (query: string) => {
    const coinsFiltered = allCoins.filter((coin) => {
      return (
        coin.name.toLowerCase().includes(query.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(query.toLowerCase())
      );
    });
    setCoins(coinsFiltered);
  };

  const handlePress = (coin: IFCoin) => {
    //@ts-ignore
    navigation.navigate("CoinDetail", { coin });
  };

  return (
    <View style={styles.container}>
      <SearchCoin onChange={handleSearch} />
      {coins.length ? (
        <FlatList
          data={coins}
          renderItem={({ item }) => (
            <CoinsItem handlePress={() => handlePress(item)} coin={item} />
          )}
        ></FlatList>
      ) : (
        <View style={styles.loadingContainer}>
          <Text>Loading...</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.pink.light,
  },
  container: {
    backgroundColor: colors.pink.light,
    height: "100%",
  },
});
