import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { firestore } from "../../../config/firebaseBD";
import { useGlobalUse } from "../../../components/GlobalUse";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function ListSuporte({ navigation }) {
  const [forms, setForms] = useState([]);
  const { userLog } = useGlobalUse();
  var CONTADOR_LIST = 0;
  const DadosSuporte = () => {
    firestore
      .collection("Servicos")
      .where("Responsavel", "==", userLog)
      .where("Atividade", "==", "Suporte")
      .onSnapshot((query) => {
        query.forEach((doc) => {
          setForms(
            query.docs.map((doc) => ({
              data: doc.data().DataAgenda,
              os: doc.data().OS,
              pt: doc.data().PT,
              instrucoes: doc.data().Instrucoes,
              problemas: doc.data().Problemas,
              cliente: doc.data().Cliente,
              endereco: doc.data().Endereco,
              localizacao: doc.data().Localizacao,
            }))
          );
        });
      });
  };

  useEffect(() => {
    DadosSuporte();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={forms}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.bnt}
              onPress={() =>
                navigation.navigate("DetailSuport", {
                  data: item.data,
                  pt: item.pt,
                  instrucoes: item.instrucoes,
                  problemas: item.problemas,
                  cliente: item.cliente,
                  endereco: item.endereco,
                  localizacao: item.localizacao,
                })
              }
            >
              <Icon name="file" size={35} style={{ marginLeft: 10 }} />
              <Text style={styles.text}>OS-{item.os}</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEA443",
  },

  text: {
    marginLeft: 15,
    fontSize: 20,
    color: "black",
  },

  bnt: {
    margin: 5,
    marginLeft: "5%",
    marginRight: "5%",
    padding: 20,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 7,
    backgroundColor: "#FFF",
  },
});
