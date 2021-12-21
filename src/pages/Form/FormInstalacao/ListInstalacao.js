import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import firebaseBD, { firestore } from "../../../config/firebaseBD";
import { useGlobalUse } from "../../../components/GlobalUse";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function ListInstalacao({ navigation }) {
  const [forms, setForms] = useState([]);

  const { userLog, userUid } = useGlobalUse();

  const ListSuporte = () => {
    firestore
      .collection("Servicos")
      .where("Responsavel", "==", userLog)
      .where("Atividade", "==", "Instalacao")
      .onSnapshot((query) => {
        query.forEach((doc) => {
          setForms(
            query.docs.map((doc) => ({
              data: doc.data().DataAgenda,
              pt: doc.data().PT,
              inversor: doc.data().Inversor,
              paineis: doc.data().Paineis,
              instrucoes: doc.data().Instrucoes,
              cliente: doc.data().Cliente,
              endereco: doc.data().Endereco,
              localizacao: doc.data().Localizacao,
            }))
          );
        });
      });
  };

  useEffect(() => {
    ListSuporte();
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
                navigation.navigate("DetailInstall", {
                  data: item.data,
                  pt: item.pt,
                  instrucoes: item.instrucoes,
                  inversor: item.inversor,
                  paineis: item.paineis,
                  cliente: item.cliente,
                  endereco: item.endereco,
                  localizacao: item.localizacao,
                })
              }
            >
              <Icon name="file" size={35} style={{ marginLeft: 10 }} />
              <Text style={styles.text}>PT-{item.pt}</Text>
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
