import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { IFCoin } from "../../types/coins/typeCoins";
import colors from "../../res/colors";
import Http from "../../libs/http";
import CoinsItem from "./CoinsItem";

type detailProps = {
  route: {
    params: {
      coin: IFCoin;
    };
  };
};

export default function CoinDetailScreen({ route }: detailProps) {
  const [coin, setCoin] = useState<IFCoin>({
    id: "",
    name: "",
    price_usd: "",
    symbol: "",
    percent_change_1h: "",
    csupply: "",
    percent_change_24h: "",
    percent_change_7d: "",
    price_btc: "",
    rank: 0,
  });
  const [imgCoin, setImgCoin] = useState<string>("");

  useEffect(() => setCoin(route.params.coin), []);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Image
          style={styles.image}
          source={{
            uri: `https://c1.coinlore.com/img/25x25/${coin.name.toLowerCase()}.png`,
          }}
        />
        <Text style={[styles.text, styles.coinText]}>{coin.symbol}</Text>
      </View>
      <View style={styles.sectionInfo}>
        <Text style={[styles.title]}>Price in USD</Text>
        <Text style={[styles.info]}>${coin.price_usd}</Text>
      </View>
      <View style={styles.sectionInfo}>
        <Text style={[styles.title]}>Rank</Text>
        <Text style={[styles.info]}>{coin.rank}</Text>
      </View>
      <View style={styles.sectionInfo}>
        <Text style={[styles.title]}>Last hour change:</Text>
        <Text style={[styles.info]}>{coin.percent_change_1h}</Text>
      </View>
      <View style={styles.sectionInfo}>
        <Text style={styles.title}>Last day change:</Text>
        <Text style={styles.info}>{coin.percent_change_24h}</Text>
      </View>
      <View style={styles.sectionInfo}>
        <Text style={styles.title}>Csupply:</Text>
        <Text style={styles.info}>{coin.csupply}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    backgroundColor: colors.background,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  coinText: {
    fontWeight: "600",
    marginLeft: 4,
    fontSize: 16,
  },
  title: {
    backgroundColor: colors.headline,
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: colors.text,
    fontSize: 18,
  },
  info: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: colors.text,
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  sectionInfo: {
    display: "flex",
    flexDirection: "column",
  },
  image: {
    width: 25,
    height: 25,
  },
  sectionStats: {
    padding: 20,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  rank: {
    backgroundColor: colors.terciary,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
