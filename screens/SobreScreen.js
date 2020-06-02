import * as React from "react";
import {
  StyleSheet,
  Button,
  SafeAreaView,
  Text,
  View,
  Platform
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Top from "../components/Top";
import { Linking } from "expo";

import { AdMobBanner } from "expo-ads-admob";

export default function SobreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Top></Top>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text
          style={[
            styles.titulo,
            {
              textAlign: "center",
              fontSize: 20,
              paddingVertical: 5,
              color: "#fff",
              backgroundColor: "#E3302F",
              marginBottom: 20
            }
          ]}
        >
          SOBRE APP
        </Text>

        <View style={styles.bloco}>
          <Text style={styles.titulo}>DESENVOLVEDOR</Text>
          <Text style={styles.texto}>FÁBIO JR.</Text>
        </View>

        <View style={styles.bloco}>
          <Text style={styles.titulo}>FONTE DE DADOS</Text>
          <Text style={styles.texto}>
            {" "}
            Todas as dados referente ao COVID-19, esta sendo disponíbilidadas
            pela API de dados aberto
            https://covid-19-dados-abertos.p.rapidapi.com/covid/v1.0/all
          </Text>
        </View>

        <View style={styles.bloco}>
          <Text style={styles.titulo}>ANÚNCIOS</Text>
          <Text style={styles.texto}>
            Os anúncios são limitados a uma quantidade para não apresentar
            anúncios constantes!
          </Text>
        </View>

        <View style={styles.bloco}>
          <Text style={styles.titulo}>PERMISSÕES</Text>
          <Text style={styles.texto}>
            Este aplicativo não requer permissões pessoais como identidade,
            contatos, arquivos, localização etc.
          </Text>
        </View>

        <View style={styles.bloco}>
          <Button
            onPress={() => {
              Linking.openURL("https://app.tabaratoexpress.com.br/#/termouso");
            }}
            title="TERMO DE USO"
          ></Button>
        </View>

        <View style={styles.bloco}>
          <Button
            onPress={() => {
              Linking.openURL("https://app.tabaratoexpress.com.br/#/politica");
            }}
            title="POLITICA DE PRIVACIDADE"
          ></Button>
        </View>

        <View style={{ alignItems: "center", marginVertical: 10 }}>
          <AdMobBanner
            bannerSize="largeBanner"
            adUnitID={
              Platform.OS === "android"
                ? "ca-app-pub-9469642089547520/3830178345"
                : "ca-app-pub-9469642089547520/2965487539"
            }
            servePersonalizedAds // true or false
            onDidFailToReceiveAdWithError={ee => {
              console.log(ee);
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3D425A"
  },
  contentContainer: {
    paddingTop: 0
  },
  titulo: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    color: "#00C1A9"
  },

  texto: {
    fontFamily: "Roboto-Light",
    textAlign: "justify",
    fontSize: 14,
    color: "#fff"
  },

  bloco: {
    marginHorizontal: 10,
    alignItems: "center",
    paddingVertical: 10
  }
});
