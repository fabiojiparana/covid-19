import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  Animated,
  FlatList,
  View,
  TextInput,
  Platform
} from "react-native";

import { AdMobInterstitial } from "expo-ads-admob";

//import { ScrollView } from "react-native-gesture-handler";
import Top from "../components/Top";
import { MonoText } from "../components/StyledText";
import api from "../api";
import FeedPaises from "../components/FeedPaises";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

AdMobInterstitial.setAdUnitID(
  Platform.OS === "android"
    ? "ca-app-pub-9469642089547520/5238628782"
    : "ca-app-pub-9469642089547520/6743637369"
);

export default function HomeScreen() {
  const [dados, setDados] = useState([]);
  const [dadosZ, setDadosZ] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  function compare(a, b) {
    if (a.pais_PT < b.pais_PT) {
      return -1;
    }
    if (a.pais_PT > b.pais_PT) {
      return 1;
    }
    return 0;
  }
  async function getBanner() {
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
    await AdMobInterstitial.showAdAsync();
  }

  async function getDados() {
    setLoading(true);
    api
      .get()
      .then(res => {
        let data = [];
        for (let i in res.data) {
          data.push({
            pais_PT: res.data[`${i}`].country.pais_PT,
            populacao: res.data[`${i}`].country.populacao,
            covid_data: res.data[`${i}`].covid_data,
            multimedia: res.data[`${i}`].multimedia
          });
        }
        data.sort(compare);
        setDadosZ(data);
        setLoading(false);
        setRefreshing(false);
        setDados(data);
        //  console.log(data);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }

  useEffect(() => {
    getDados();
    getBanner();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Top></Top>
      <View style={{ flex: 1 }}>
        <MonoText style={{ margin: 10 }}>Lista de Países</MonoText>
        <TextInput
          style={{
            marginHorizontal: 10,
            marginBottom: 2,
            fontSize: 18,
            fontFamily: "Roboto-Light",
            borderColor: "rgba(251, 179, 75,0.7)",
            borderWidth: 0.6,
            borderRadius: 4,
            padding: 5,
            height: 40,
            color: "#fff"
          }}
          placeholder="Localizar Países ..."
          maxLength={40}
          onChangeText={value => {
            if (value === "") {
              setDados(dadosZ);
            } else {
              setDados([]);
              const result = dadosZ.find(tree =>
                tree.pais_PT.toLowerCase().startsWith(value.toLowerCase())
              );
              if (result !== undefined) {
                setDados([result]);
              }
            }
          }}
        ></TextInput>
        <AnimatedFlatList
          data={dados}
          ListFooterComponent={() => (
            <View
              style={{
                alignItems: "center"
              }}
            >
              {loading && (
                <ActivityIndicator size={70} color="rgba(251, 179, 75,0.7)" />
              )}
            </View>
          )}
          renderItem={({ item }) => <FeedPaises item={item}></FeedPaises>}
          keyExtractor={(item, index) =>
            item.pais_PT.toString() + "_" + item.populacao.toString()
          }
          onEndReachedThreshold={0.5}
          style={{ marginVertical: 3, height: 75 }}
          refreshing={refreshing}
          onRefresh={() => {
            setRefreshing(true);
            getDados();
          }}
        ></AnimatedFlatList>
      </View>
    </SafeAreaView>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3D425A"
  }
});
