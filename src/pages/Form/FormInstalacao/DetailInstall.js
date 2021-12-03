import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  Animated,
  Keyboard,
  Linking,
} from "react-native";

export default function FormDetail({ navigation, route }) {
  const [pt] = useState(route.params.pt);
  const [cliente] = useState(route.params.cliente);
  const [data] = useState(route.params.data);
  const [problemas] = useState(route.params.problemas);
  const [endereco] = useState(route.params.endereco);
  const [instrucoes] = useState(route.params.instrucoes);
  const [localizacao] = useState(route.params.localizacao);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>PT:</Text>
      <TextInput style={styles.boxForm} value={pt} editable={false} />

      <Text style={styles.text}>Nome Cliente:</Text>
      <TextInput style={styles.boxForm} value={cliente} editable={false} />

      <Text style={styles.text}>Data Agendamento:</Text>
      <TextInput
        style={styles.boxForm}
        value={data}
        editable={false}
        borderBottomWidth={2}
      />

      <Text style={styles.text}>Descrição do Problema:</Text>
      <TextInput
        multiline={true}
        value={problemas}
        editable={false}
        style={styles.boxForm}
      />

      <Text style={styles.text}>Endereço:</Text>
      <TextInput
        style={styles.boxForm}
        value={endereco}
        editable={false}
        borderBottomWidth={2}
      />

      <Text style={styles.text}>Instrucoes:</Text>
      <TextInput
        style={styles.boxForm}
        multiline={true}
        value={instrucoes}
        editable={false}
        borderBottomWidth={2}
      />
      <Text style={styles.text}>Localização:</Text>
      <TouchableOpacity
        style={styles.boxForm}
        onPress={() => Linking.openURL(localizacao)}
      >
        <Text style={styles.text}>{localizacao}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.nextAtiv}
        onPress={() =>
          navigation.navigate("RelatorioSuporte", {
            data: data,
            pt: pt,
          })
        }
      >
        <Text style={styles.text}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEA443",
  },

  text: {
    marginLeft: "6%",
    fontSize: 20,
    color: "black",
  },

  boxForm: {
    marginLeft: "5%",
    marginRight: "5%",
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    backgroundColor: "#fff",
    opacity: 0.5,
    fontSize: 20,
    color: "black",
  },

  boxFormMult: {
    marginLeft: "5%",
    marginRight: "5%",

    borderRadius: 7,
    backgroundColor: "#FFF",
    opacity: 0.8,
    fontSize: 20,
    color: "black",
    //height:200,
  },

  nextAtiv: {
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "5%",
    width: "90%",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
  },
});
