import { StyleSheet } from 'react-native';


const LoginStyle = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FEA443",
  },

  containerLogo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    
  },

  intContainer: {
    flex: 1,
    paddingBottom: "20%",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },

    textInput: {
    backgroundColor: "#FFF",
    marginBottom: 15,
    padding: 10,
    width: "90%",
    borderRadius: 7,
    opacity: 0.6,
    fontSize: 14,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    elevation:5,
  },

  bnt: {
    backgroundColor: "#F2B705",
    padding: 10,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation:10,
    
  },

  textBnt: {
    color: "#58555A",
    fontSize: 14,
    fontWeight: "bold",
  },

  bntCriar: {
    backgroundColor: "#FEA443",

    marginTop: 10,
    
  },

  textBntCriar: {
    fontSize: 13,
    color: "#003F63",
  },

});

export default LoginStyle;