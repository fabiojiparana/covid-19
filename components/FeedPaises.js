import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { ProgressCircle } from "react-native-svg-charts";

const styles = StyleSheet.create({
  container: {
    width: "95%",
    marginHorizontal: 10,
    marginVertical: 4,
    borderRadius: 4,
    padding: 5,
    backgroundColor: "rgba(255,255,255,0.7)",
    justifyContent: "center",
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 3
      }
    })
  },
  country: {
    fontFamily: "Roboto-Medium",
    fontSize: 22,
    color: "#000"
  },
  populacao: {
    fontFamily: "Roboto-Light",
    fontSize: 15,
    color: "#000"
  },
  populacao2: {
    fontFamily: "Roboto-Light",
    fontSize: 15,
    color: "#fff"
  },
  casos: {
    fontFamily: "Roboto-Bold",
    fontSize: 22,
    color: "#fff"
  }
});

class FeedPaises extends React.PureComponent {
  render() {
    const { item } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.country}>{item.pais_PT}</Text>

        <View
          style={{
            backgroundColor: "#35384E",
            flexDirection: "column",
            marginHorizontal: 2,
            borderRadius: 3
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                borderRightWidth: 1,
                alignItems: "center",
                justifyContent: "center",
                borderRightColor: "rgba(255,255,255,0.5)",
                width: "49%",
                height: 110
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Text style={styles.casos}>
                  {item.covid_data.casos !== "" ? item.covid_data.casos : "0"}
                </Text>
                <Text style={styles.populacao2}>Casos Positivos</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text style={styles.casos}>
                  {item.covid_data.fatalidades !== ""
                    ? item.covid_data.fatalidades
                    : "0"}
                </Text>
                <Text style={styles.populacao2}>Fatalidades</Text>
              </View>
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: "45%",
                height: 110
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Text style={styles.casos}>
                  {item.covid_data.pacientes_criticos !== ""
                    ? item.covid_data.pacientes_criticos
                    : "0"}
                </Text>
                <Text style={styles.populacao2}>Pac. Críticos</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text style={styles.casos}>
                  {item.covid_data.pacientes_recuperados !== ""
                    ? item.covid_data.pacientes_recuperados
                    : "0"}
                </Text>
                <Text style={styles.populacao2}>Pac. Recuperados</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              height: 140,
              borderTopWidth: 1,
              borderTopColor: "rgba(255,255,255,0.5)",
              padding: 4,
              flexDirection: "row"
            }}
          >
            <View
              style={{
                width: "50%",
                alignItems: "center"
              }}
            >
              <ProgressCircle
                style={{ height: 90, width: 90 }}
                progress={item.covid_data.fatalidades / item.covid_data.casos}
                progressColor={"#DB001C"}
                startAngle={-Math.PI * 0.8}
                endAngle={Math.PI * 0.8}
              />
              <Text style={[styles.casos, { marginTop: -60, fontSize: 18 }]}>
                {item.covid_data.casos !== ""
                  ? item.covid_data.taxa_de_fatalidades
                  : "0%"}
              </Text>
              <Text style={[styles.populacao2, { marginTop: 30 }]}>
                Taxa de Fatalidade
              </Text>
            </View>

            <View
              style={{
                width: "50%",
                alignItems: "center"
              }}
            >
              <ProgressCircle
                style={{ height: 90, width: 90 }}
                progress={
                  item.covid_data.pacientes_recuperados / item.covid_data.casos
                }
                progressColor={"rgb(134, 65, 244)"}
                startAngle={-Math.PI * 0.8}
                endAngle={Math.PI * 0.8}
              />
              <Text style={[styles.casos, { marginTop: -60, fontSize: 18 }]}>
                {item.covid_data.casos !== ""
                  ? item.covid_data.taxa_de_recuperacao
                  : "0%"}
              </Text>
              <Text style={[styles.populacao2, { marginTop: 30 }]}>
                Taxa de Recuperação
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default FeedPaises;
