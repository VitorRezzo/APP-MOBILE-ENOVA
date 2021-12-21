import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import firebaseBD from "../../../config/firebaseBD";
import { useGlobalUse } from "../../../components/GlobalUse";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  Animated,
  Linking,
  ScrollView,
} from "react-native";

export default function FormDetail({ navigation, route }) {
  const [pt] = useState(route.params.pt);
  const [cliente] = useState(route.params.cliente);
  const [data] = useState(route.params.data);
  const [inversor] = useState(route.params.inversor);
  const [paineis] = useState(route.params.paineis);
  const [endereco] = useState(route.params.endereco);
  const [instrucoes] = useState(route.params.instrucoes);
  const [localizacao] = useState(route.params.localizacao);
  const [Arquivos, setArquivos] = useState([]);
  const { userLog } = useGlobalUse();

  const GetArquivos = () => {
    firebaseBD
      .storage()
      .ref()
      .child(`Instalacao/${pt}/${userLog}/`)
      .listAll()
      .then((res) => {
        res.items.forEach(async (item) => {
          await item.getDownloadURL().then(async (url) => {
            await setArquivos((prevState) => [
              ...prevState,
              { name: item.name, urls: url },
            ]);
          });
        });
      });
  };

  useEffect(() => {
    GetArquivos();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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

        <Text style={styles.text}>Inversor:</Text>
        <TextInput value={inversor} editable={false} style={styles.boxForm} />

        <Text style={styles.text}>Paineis:</Text>
        <TextInput value={paineis} editable={false} style={styles.boxForm} />

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
        <Text style={styles.text}>Arquivos:</Text>
        {Arquivos.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.boxForm}
            onPress={() => Linking.openURL(item.urls)}
          >
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        ))}

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
      </ScrollView>
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
    marginTop: "5%",
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
