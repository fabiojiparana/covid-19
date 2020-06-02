import * as React from "react";
import { StyleSheet, SafeAreaView, Text, View, Platform } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Top from "../components/Top";

import { AdMobBanner } from "expo-ads-admob";

export default function CororaScreen() {
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
              backgroundColor: "#E3302F"
            }
          ]}
        >
          O QUE É O CORONAVÍRUS?
        </Text>

        <View style={{ alignItems: "center", marginVertical: 10 }}>
          <AdMobBanner
            bannerSize="banner"
            adUnitID={
              Platform.OS === "android"
                ? "ca-app-pub-9469642089547520/4062946785"
                : "ca-app-pub-9469642089547520/5783222562"
            }
            servePersonalizedAds // true or false
            onDidFailToReceiveAdWithError={ee => {
              console.log(ee);
            }}
          />
        </View>

        <View style={styles.bloco}>
          <Text style={styles.texto}>
            O coronavírus é uma família de vírus que se manifestou pela primeira
            vez em 1937. Em 31 de dezembro de 2019, foi identificado um novo
            tipo de coronavírus, que teve origem no mercado de frutos do mar e
            de animais vivos da cidade de Wuhan, na China.
          </Text>
          <Text style={styles.texto}>
            Por causar graves infecções respiratórias, o vírus ficou conhecido
            pela sigla SARS (Severe Acute Respiratory Syndrome ou Síndrome
            Respiratória Aguda Grave, em tradução livre).
          </Text>
          <Text
            style={[
              styles.texto,
              {
                backgroundColor: "rgba(255,255,255,0.2)",
                paddingHorizontal: 5,
                color: "#fff",
                paddingTop: 14,
                borderRadius: 10
              }
            ]}
          >
            Curiosidade: o vírus ganhou esse nome devido à sua forma que se
            assemelha a uma coroa.
          </Text>
        </View>

        <View style={styles.bloco}>
          <Text style={styles.titulo}>OS TIPOS DE CORONAVÍRUS</Text>
          <Text style={styles.texto}>
            O coronavírus foi se modificando ao longo do tempo, por isso, os
            profissionais de saúde viram a necessidade de nomear cada um dos
            tipos do vírus de maneira diferente.
          </Text>
          <Text style={styles.texto}>
            No caso do último vírus descoberto, seu nome inicial era novo
            coronavírus ou SARS-CoV-2, porém, a Organização Mundial da Saúde
            (OMS), no dia 30 de Janeiro de 2020, anunciou a mudança da
            nomenclatura do vírus para COVID-19.
          </Text>
          <Text style={styles.texto}>
            O nome foi alterado para se adaptar às diretrizes da OMS, que
            aconselham os estudiosos a não darem nomes que referenciem animais,
            objetos, indivíduos ou grupo de pessoas para os vírus descobertos.
          </Text>
        </View>

        <View style={[styles.bloco, { alignItems: "flex-start" }]}>
          <Text style={styles.titulo}>CONHEÇA ABAIXO OS TIPOS CONHECIDOS:</Text>
          <Text style={[styles.texto, { textAlign: "left" }]}>
            - Beta coronavírus OC43 e HKU1;
          </Text>
          <Text style={styles.texto}>- Alpha coronavírus 229E e NL63;</Text>
          <Text style={styles.texto}>
            - MERS-CoV (causador da Síndrome Respiratória do Oriente Médio ou
            MERS);
          </Text>
          <Text style={styles.texto}>
            - SARS-CoV (causador da Síndrome Respiratória Aguda Grave ou SARS);
          </Text>
          <Text style={styles.texto}>
            - COVID-19 (o tipo mais recente descoberto).
          </Text>
        </View>
        <View style={{ alignItems: "center", marginVertical: 10 }}>
          <AdMobBanner
            bannerSize="banner"
            adUnitID={
              Platform.OS === "android"
                ? "ca-app-pub-9469642089547520/2784211057"
                : "ca-app-pub-9469642089547520/6252682773"
            }
            servePersonalizedAds // true or false
            onDidFailToReceiveAdWithError={ee => {
              console.log(ee);
            }}
          />
        </View>
        <View style={[styles.bloco, { alignItems: "flex-start" }]}>
          <Text style={styles.titulo}>
            QUAIS SÃO OS SINTOMAS DO CORONAVÍRUS?
          </Text>

          <Text style={[styles.texto, { textAlign: "left" }]}>- Febre;</Text>
          <Text style={styles.texto}>- Espirros</Text>
          <Text style={styles.texto}>- Tosse;</Text>
          <Text style={styles.texto}>- Coriza;</Text>
          <Text style={styles.texto}>- Falta de ar.</Text>
          <Text style={styles.texto}>
            O coronavírus pode causar infecções respiratórias desde um simples
            resfriado até uma pneumonia severa. Isto vai depender de vários
            fatores como idade e imunidade.
          </Text>
          <Text style={styles.texto}>
            Os vários tipos do coronavírus causam doenças respiratórias e a
            forma mais eficaz de identificar a infecção pelo vírus é procurar um
            médico assim que os sintomas se manifestarem.
          </Text>
          <Text style={styles.texto}>
            Apesar de serem sintomas semelhantes aos de um resfriado, por
            exemplo, o médico pode identificar a possibilidade de contaminação
            pelo vírus sabendo do histórico de viagem do paciente ou se ele teve
            contato com alguém que tenha viajado para a China, Japão, Coreia do
            Sul e do Norte, Cingapura, Vietnã, Tailândia e Camboja.
          </Text>
          <Text style={styles.texto}>
            Caso alguma dessas perguntas tenha resposta positiva, o médico
            encaminhará os exames para uma investigação epidemiológica.
          </Text>
        </View>

        <View style={[styles.bloco, { alignItems: "flex-start" }]}>
          <Text style={styles.titulo}>
            COMO OCORRE A TRANSMISSÃO DO CORONAVÍRUS?
          </Text>
          <Text style={[styles.texto, { textAlign: "left" }]}>
            Inicialmente, se pensava que a transmissão da doença acontecia de
            animais para pessoas, mas com os últimos acontecimentos na China,
            sabemos que a transmissão também pode ocorrer de pessoa para pessoa.
          </Text>
          <Text style={styles.texto}>
            O coronavírus é de fácil transmissão e pode se disseminar das
            seguintes formas:
          </Text>
          <Text style={styles.texto}>
            1 - Contato com objetos ou superfícies contaminadas, seguido de
            contato com a boca, nariz ou olhos;
          </Text>
          <Text style={styles.texto}>
            2 - Contato pessoal próximo, como toque ou aperto de mão;
          </Text>
          <Text style={styles.texto}>3 - Tosse</Text>
          <Text style={styles.texto}>4 - Espirro;</Text>
          <Text style={styles.texto}>
            5 - Contato com secreções respiratórias.
          </Text>
          <Text style={styles.texto}>
            Qualquer pessoa que se aproxime um metro de uma pessoa infectada
            corre o risco de ser contaminada com a infecção.
          </Text>
        </View>

        <View style={[styles.bloco, { alignItems: "flex-start" }]}>
          <Text style={styles.titulo}>FIQUE ATENTO!</Text>
          <Text style={[styles.texto, { textAlign: "left" }]}>
            Agora que você já sabe como se prevenir do coronavírus, aplique as
            ações de prevenção na sua rotina e da sua família.
          </Text>

          <View style={{ alignItems: "center", marginVertical: 10 }}>
            <AdMobBanner
              bannerSize="largeBanner"
              adUnitID={
                Platform.OS === "android"
                  ? "ca-app-pub-9469642089547520/3407312996"
                  : "ca-app-pub-9469642089547520/7482003964"
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
    color: "#fff",
    textTransform: "uppercase",
    marginTop: 10
  },
  image: {
    width: 90,
    height: 90
  },
  bloco: {
    marginHorizontal: 10,
    alignItems: "center",
    paddingVertical: 10
  }
});
