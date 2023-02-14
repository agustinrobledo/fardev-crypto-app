import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import Storage from "../../libs/storage";
import React, { useEffect, useState } from "react";
import { IFCoin } from "../../types/coins/typeCoins";
import colors from "../../res/colors";
import { useNavigation } from "@react-navigation/native";
import Title from "../utils/Title";
import Label from "../utils/Label";

type detailProps = {
  route: {
    params: {
      coin: IFCoin;
    };
  };
};

export default function CoinDetailScreen({ route }: detailProps) {
  const navigation = useNavigation();
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
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    setCoin(route.params.coin);
    navigation.addListener("focus", () => getFavorite());
    return navigation.removeListener("focus", () => getFavorite());
  }, [navigation]);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite();
    } else {
      addFavorite();
    }
  };

  const removeFavorite = async () => {
    try {
      const key = `favorite-${route.params.coin.id}`;

      const removed = await Storage.instance.remove(key);

      if (removed) {
        setIsFavorite(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addFavorite = async () => {
    try {
      const coinJson = JSON.stringify(coin);
      const key = `favorite-${route.params.coin.id}`;

      const stored = await Storage.instance.store(key, coinJson);

      if (stored) {
        setIsFavorite(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getFavorite = async () => {
    try {
      const key = `favorite-${route.params.coin.id}`;
      console.log(key);

      const favoriteCoin = await Storage.instance.get(key);
      console.log(favoriteCoin);
      if (favoriteCoin) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    } catch (error) {}
  };
  return (
    <View style={styles.container}>
      <Title
        backgroundColor={colors.green.dark}
        color={colors.green.light}
        image={`https://c1.coinlore.com/img/25x25/${coin.name.toLowerCase()}.png`}
      >
        {coin.name}
      </Title>
      <View style={styles.data}>
        <View style={styles.section}>
          <Label
            backgroundColor={colors.green.dark}
            type="square"
            width={166}
            height={166}
          >
            <Text style={[styles.labelText, { color: colors.green.light }]}>
              Price in USD
            </Text>
            <Text style={[styles.labelNumber, { color: colors.green.light }]}>
              ${coin.price_usd}
            </Text>
          </Label>
          <Pressable onPress={toggleFavorite}>
            <Label
              backgroundColor={colors.blue.dark}
              type="circle"
              width={166}
              height={166}
            >
              <Image
                style={styles.favoriteIcon}
                source={require("../../../assets/hearth.png")}
              />
            </Label>
          </Pressable>
        </View>

        <View style={styles.section}>
          <Label
            backgroundColor={colors.green.light}
            type="square"
            width={"100%"}
            height={166}
          >
            <Text style={[styles.labelText, { color: colors.blue.dark }]}>
              Percent change in the past 1h
            </Text>
            <Text style={[styles.labelNumber, { color: colors.blue.dark }]}>
              ${coin.percent_change_1h}
            </Text>
          </Label>
        </View>
        <View style={styles.section}>
          <Label
            backgroundColor={colors.blue.extraLight}
            type="circle"
            width={166}
            height={166}
          >
            <Text style={[styles.labelText, { color: colors.green.dark }]}>
              Rank
            </Text>
            <Text style={[styles.labelNumber, { color: colors.green.dark }]}>
              #{coin.rank}
            </Text>
          </Label>
          <Label
            backgroundColor={colors.blue.dark}
            type="square"
            width={166}
            height={166}
          >
            <Text style={[styles.labelText, { color: colors.green.light }]}>
              Price in BTC{" "}
            </Text>
            <Text style={[styles.labelNumber, { color: colors.green.light }]}>
              #{coin.price_btc}
            </Text>
          </Label>
        </View>
        {/* 
      <View style={styles.sectionInfo}>
        <Text style={styles.title}>Last day change:</Text>
        <Text style={styles.info}>{coin.percent_change_24h}</Text>
      </View>
      <View style={styles.sectionInfo}>
        <Text style={styles.title}>Csupply:</Text>
        <Text style={styles.info}>{coin.csupply}</Text>
</View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: colors.pink.light,
  },
  data: {
    alignSelf: "center",
    width: "90%",
  },
  section: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  header: {
    display: "flex",
    flexDirection: "row",
  },
  labelText: {
    fontSize: 24,
    fontFamily: "Violet Sans",
  },
  labelNumber: {
    fontSize: 32,
    fontFamily: "Violet Sans",
  },
  favoriteIcon: {
    width: 80,
    height: 80,
    tintColor: colors.pink.light,
  },
  title: {
    backgroundColor: colors.headline,
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: colors.text,
    fontSize: 18,
  },
  addToFavorites: {
    display: "flex",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    flex: 3,
  },
  deleteFromFavorites: {
    display: "flex",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.secondary,
    flex: 3,
  },
  info: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: colors.text,
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
