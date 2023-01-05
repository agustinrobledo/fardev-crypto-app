import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { IFCoin } from "../../types/coins/typeCoins";
import colors from "../../res/colors";
import Http from "../../libs/http";

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
      <View style={styles.sectionStats}>
        <View style={styles.rank}>
          <Text style={[styles.text]}>Price in USD</Text>
          <Text style={[styles.text]}>${coin.price_usd}</Text>
        </View>
        <View style={styles.rank}>
          <Text style={[styles.text]}>Rank</Text>
          <Text style={[styles.text]}>{coin.rank}</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={[styles.text]}>Last hour change:</Text>
        <Text style={[styles.text]}>{coin.percent_change_1h}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>Last day change:</Text>
        <Text style={styles.text}>{coin.percent_change_24h}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>Csupply:</Text>
        <Text style={styles.text}>{coin.csupply}</Text>
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
  section: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
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
