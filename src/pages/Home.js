import React from 'react';
import 
{View,
Text,
Image,
TouchableOpacity,
StyleSheet,
SafeAreaView} from 'react-native';
import  {Icon}  from 'react-native-elements';


export default function Home({navigation}) {

return(

  <SafeAreaView style={styles.container}>
      
      <View style={styles.intContainer}>
        
        <TouchableOpacity style={styles.touchBnt} >
        
            <Image
              style={styles.imgBnt}
              resizeMode="stretch"
              source={require('../img/preenchendo-formulario.png')}

            />

           <View style={styles.viewBnt}>
               <Text style={styles.textBnt}>Formulario</Text>
          </View>
        </TouchableOpacity>
     
      </View>
     
    <View >
          <TouchableOpacity style={styles.bntExit} onPress={()=> navigation.goBack('Login')}>
            <Icon 
                name="logout"
            />
          </TouchableOpacity>
    </View>
    
  </SafeAreaView>

    
 
);

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor: "#FFF",
    
    
  },
  intContainer:{
    alignItems: "center",
    margin:40,
  },
    touchBnt:{
     backgroundColor:'#E8E8DB',
        //backgroundColor:'#A8C0CE',
        marginTop:'10%',
        justifyContent: "center",
        alignItems: "center",
        width:'60%',
        height:'50%',
        borderRadius:7,
        elevation: 5
      
        
    },

    imgBnt:{
      marginTop:'20%',
     width:'55%',
      height:'55%',
      

    },

    viewBnt:{
      
      width:'100%',
      height:'20%',
      marginTop:'9%',
      borderRadius:3,
      alignItems: "center",
      justifyContent:"center"
    },

    textBnt:{
      color:'#353D40',
      fontSize:14,      
      
    },

    bntExit:{
      width:40,
      height:20,
      borderRadius:10,
      elevation:2,
      marginTop:'60%',
      marginLeft:'5%',
      marginBottom:'5%',
    },

    
    


});