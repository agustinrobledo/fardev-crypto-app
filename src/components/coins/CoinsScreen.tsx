import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Http from "../../libs/http";
import type { IFCoin } from "../../types/coins/typeCoins";
import CoinsItem from "./CoinsItem";

export default function CoinsScreen() {
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
  return (
    <View>
      <FlatList
        data={coins}
        renderItem={({ item }) => <CoinsItem coin={item} />}
      ></FlatList>
      <Text>coinsScreen</Text>
    </View>
  );
}
