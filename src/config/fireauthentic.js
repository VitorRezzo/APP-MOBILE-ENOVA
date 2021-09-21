import firebase from "firebase";



function fireauth(email, password,navigation) {
  
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    let user = userCredential.user;
    console.log(user);
    navigation.navigate('Home');
  })
  .catch((error) => {

    let errorCode = error.code;
    let errorMessage = error.message;
   
    console.log(errorMessage);
  });
}


function firestate(user,navigation) {

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var uid = user.uid;
    navigation.navigate('Home');
  } 
});


}


function firesignout()
{
firebase.auth().signOut().then(() => {
  console.log("llogout com sucesso");
}).catch((error) => {
  console.log(error,"falha logout");
});

}






export default authentication=
{
  fireauth,firesignout,firestate
}