// Initialize Firebase
const initializing = () => {
  var config = {
    apiKey: "AIzaSyCt9yjfxwLkam9k--FRqUyqn-nw2pOgrdY",
    authDomain: "diabetessocialmedia.firebaseapp.com",
    databaseURL: "https://diabetessocialmedia.firebaseio.com",
    projectId: "diabetessocialmedia",
    storageBucket: "diabetessocialmedia.appspot.com",
    messagingSenderId: "1728202919"
  };
  firebase.initializeApp(config);
  const db = firebase.firestore();
  return (db);
}
  
