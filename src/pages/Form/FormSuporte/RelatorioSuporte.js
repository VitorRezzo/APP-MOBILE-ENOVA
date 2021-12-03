import React, { useState, useEffect, useRef } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Camera } from "expo-camera";
import firebase from "firebase";

import * as MediaLibrary from "expo-media-library";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
  Modal,
} from "react-native";

export default function RelatorioSuporte({ navigation, route }) {
  const [pt] = useState(route.params.pt);
  const [data] = useState(route.params.data);

  //Modo da camera entre front ou back
  const [modcamera, setModCamera] = useState(Camera.Constants.Type.back);

  // variavel de permissão de uso da camera
  const [camerapermission, setCameraPermission] = useState(null);

  const camRef = useRef(null);

  const [capturecamera, setCaptureCamera] = useState(null);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setCameraPermission(status === "granted");
    })();

    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      setCameraPermission(status === "granted");
    })();
  }, []);

  if (camerapermission === null) {
    return <View />;
  }

  if (camerapermission === false) {
    return <Text>Acesso negado</Text>;
  }

  //FUNÇÃO CAPTURAR FOTO
  async function takePicture() {
    const dados = await camRef.current.takePictureAsync();
    setCaptureCamera(dados.uri);
    setOpen(true);
  }

  async function savePicture() {
    const img = await MediaLibrary.createAssetAsync(capturecamera);
    const response = await fetch(img.uri);
    const blob = await response.blob();
    try {
      const upload = firebase
        .storage()
        .ref()
        .child(pt + "/" + img.filename);
      //console.log(upload);
      setOpen(false);
      alert("Salvo com sucesso");
      return upload.put(blob);
    } catch (error) {
      console.log("err", error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera style={styles.camera} type={modcamera} ref={camRef}>
        <TouchableOpacity style={styles.bnt} onPress={() => takePicture()}>
          {capturecamera && (
            <Modal
              animationType="slide"
              transparent={true}
              visible={open}
              onRequestClose={() => setOpen(false)}
            >
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  style={styles.bnt}
                  onPress={() => savePicture()}
                ></TouchableOpacity>

                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={{ uri: capturecamera }}
                />
              </View>
            </Modal>
          )}
        </TouchableOpacity>
      </Camera>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    //backgroundColor: "#FEA443",
  },

  camera: {
    flex: 1,
  },

  text: {
    marginLeft: 15,
    fontSize: 20,
    color: "black",
  },

  bnt: {
    marginTop: "5%",
    marginLeft: "5%",
    marginRight: "5%",
    padding: 20,
    alignItems: "center",

    borderRadius: 7,
    backgroundColor: "#06111C",
  },
});
