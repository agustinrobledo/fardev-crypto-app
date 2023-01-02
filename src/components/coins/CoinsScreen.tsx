import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Http from "../../libs/http";
import type { IFCoin } from "../../types/coins/typeCoins";
import CoinsItem from "./CoinsItem";
import { useNavigation } from "@react-navigation/native";
import colors from "../../res/colors";

export default function CoinsScreen() {
  const navigation = useNavigation();
  const [coins, setCoins] = useState<IFCoin[]>([]);

  useEffect(() => {
    loadCoins();
  }, []);

  const loadCoins = async () => {
    try {
      const res = await Http.instance.get(
        "https://api.coinlore.net/api/tickers/"
      );
      setCoins(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePress = (coin: IFCoin) => {
    //@ts-ignore
    navigation.navigate("CoinDetail", { coin });
  };

  return (
    <View style={styles.container}>
      {coins.length ? (
        <View>
          <FlatList
            data={coins}
            renderItem={({ item }) => (
              <CoinsItem handlePress={() => handlePress(item)} coin={item} />
            )}
          ></FlatList>
          <Text>coinsScreen</Text>
        </View>
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
  },
  container: {
    backgroundColor: colors.background,
  },
});
