import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import StyleLogin from '../style/LoginStyle';
import FirebaseDatabase from '../config/Firebase';
import authentication from'../config/Fireauthentic';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  Animated,
  Keyboard,
} from "react-native";



export default function Login({navigation})  
{
  
  //VARIAVES DE ESTADOS PARA CONTROLE DOS EVENTOS DE EFEITOS 
  const [effectposition] = useState(new Animated.ValueXY({ x: 0, y: 90 }));
  const [effectopacity] = useState(new Animated.Value(0));
  const [effectlogo] = useState(new Animated.ValueXY({ x: 206, y: 116 }));
  
 


  const [user,Setuser] = useState('');
  const [password,Setpassword] = useState('');
  
  //METODO PARA CRIAR EFEITOS COM ANIMATED
  
  useEffect(() => {

    const firebase = FirebaseDatabase;
    //METODO CRIAR EVENTO TECLADO QUANDO ACIONA OU NÃO
    authentication.firestate(user,navigation);
   
    keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      keyboardDidShow
    );
    keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      keyboardDidHide
    );
    //FIM

    //ANIMAÇÃO DA VIEW DO INPUT EMAIL,SENHA E BOTÃO 
 
    Animated.parallel([
      Animated.spring(effectposition.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        
      }),

      Animated.timing(effectopacity, {
        toValue: 1,
        duration: 200,
        
      }),
    ]).start();
  }, []);
    //FIM

    //FUNÇÃO PARA VERIFICAR SE O TECLADO FOI ACIONADO OU NÃO PARA DAR EFEITO NA LOGO
  function keyboardDidShow() 
  {
    
    Animated.parallel([
        Animated.timing(effectlogo.x, {
          toValue: 150,
         duration:100,
        
      }),

 Animated.timing(effectlogo.y, {
        toValue: 80,
        duration: 90,
        
      }),
     
    ]).start();
  }
  /** PARA ESSAS FUNÇÕES TIVE QUE COLOCAR UM PAMETRO USENATIVEDRIVE = FALSE PARA NÃO DAR ALERTA DESSE ERRO  */
  function keyboardDidHide() 
  {
    Animated.parallel([
     
        Animated.spring(effectlogo.x, {
        toValue: 206,
         speed: 5,
        bounciness: 20,
        
        
      }),

      Animated.timing(effectlogo.y, {
        toValue: 116,
        duration: 100,
       
      }),
    ]).start();
  }



///METODO VERIFICAÇÃO LOGIN

function Logar(){
  
  if(user != '' && password != ''){
     authentication.fireauth(user,password,navigation)
  }
  else
  {
    alert('preencha os campos!')
  }
}


  return (
  
    <SafeAreaView style={StyleLogin.container}>
      <StatusBar style={{backgroundColor: "#FEA443"}}/>
      <View style={StyleLogin.containerLogo}>
   
        <Animated.Image
          style={StyleLogin.logoImg}
          style={{width: effectlogo.x,
                height: effectlogo.y,}}
          resizeMode="stretch"
         source={require('../img/EnovaLogo.png')}
        />
      </View>

      <Animated.View
        style={[
          StyleLogin.intContainer,
          {
            opacity: effectopacity,
            transform: [
              {
                translateY: effectposition.y,
              },
            ],
          },
        ]}
      >
        <TextInput 
        value={user}
        style={StyleLogin.textInput} 
        placeholder={"Usuário"}  
        onChangeText={(user)=> Setuser(user)}
        /> 
      
        <TextInput
        value={password}
        secureTextEntry={true}
        onChangeText={(password)=> Setpassword(password)} 
        style={StyleLogin.textInput} 
        placeholder={"Senha"}
         />
        
        <TouchableOpacity style={StyleLogin.bnt} onPress={ () => Logar()}>
          <Text style={StyleLogin.textBnt} >ACESSAR</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={StyleLogin.bntCriar}>
          <Text style={StyleLogin.textBntCriar}>Criar Conta Gratuita</Text>
        </TouchableOpacity>
      
      </Animated.View>
    
   
    </SafeAreaView>
  );
}

