import * as React from "react";
import {
  StyleSheet,
  Image,
  SafeAreaView,
  Text,
  View,
  Platform
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Top from "../components/Top";

import { AdMobBanner } from "expo-ads-admob";
export default function PrevecaoScreen() {
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
          MEDIDAS DE PREVENÇÃO
        </Text>

        <View style={styles.bloco}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require("../assets/images/icone_1.png")}
          ></Image>
          <Text style={styles.titulo}>LAVE SEMPRE AS MÃOS</Text>
          <Text style={styles.texto}>
            COM ÁGUA E SABONETE, E EVITE LEVAR AS MÃOS AO ROSTO.
          </Text>
        </View>

        <View style={styles.bloco}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require("../assets/images/icone_2.png")}
          ></Image>
          <Text style={styles.titulo}>ÁLCOOL EM GEL</Text>
          <Text style={styles.texto}>
            LEVE SEMPRE UM PARA GARANTIR A ESTERILIZAÇÃO DE SUAS MÃOS.
          </Text>
        </View>

        <View style={styles.bloco}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require("../assets/images/icone_3.png")}
          ></Image>
          <Text style={styles.titulo}>VACINA CONTRA GRIPE</Text>
          <Text style={styles.texto}>
            CASO VOCÊ FAÇA PARTE DO PÚBLICO-ALVO DA VACINA CONTRA GRIPE,
            IMUNIZE-SE TODOS OS ANOS.
          </Text>
        </View>

        <View style={styles.bloco}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require("../assets/images/icone_4.png")}
          ></Image>
          <Text style={styles.titulo}>UTENSÍLIOS PESSOAIS</Text>
          <Text style={styles.texto}>
            NÃO COMPARTILHE TOALHAS, COPOS, TALHERES E TRAVESSEIROS.
          </Text>
        </View>

        <View style={styles.bloco}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require("../assets/images/icone_5.png")}
          ></Image>
          <Text style={styles.titulo}>HÁBITOS SAUDÁVEIS</Text>
          <Text style={styles.texto}>
            MANTENHA HÁBITOS SAUDÁVEIS. ALIMENTE-SE BEM E COMA VERDURAS E
            FRUTAS. BEBA BASTANTE ÁGUA.
          </Text>
        </View>

        <View style={styles.bloco}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require("../assets/images/icone_6.png")}
          ></Image>
          <Text style={styles.titulo}>NUNCA TOQUE SEU ROSTO</Text>
          <Text style={styles.texto}>
            COM AS MÃOS SUJAS, USE MASCARÁ EM LUGARES PÚBLICOS OU QUANDO FOR
            CONVERSAR COM ALGUÉM.
          </Text>

          <View style={{ alignItems: "center", marginVertical: 10 }}>
            <AdMobBanner
              bannerSize="largeBanner"
              adUnitID={
                Platform.OS === "ios"
                  ? "ca-app-pub-9469642089547520/9749360062"
                  : "ca-app-pub-9469642089547520/5020805230"
              }
              servePersonalizedAds // true or false
              onDidFailToReceiveAdWithError={ee => {
                console.log(ee);
              }}
            />
          </View>
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
  image: {
    width: 90,
    height: 90
  },
  bloco: {
    marginHorizontal: 10,
    alignItems: "center",
    borderBottomColor: "rgba(255,255,255,0.7)",
    borderBottomWidth: 0.4,
    paddingVertical: 10
  }
});
