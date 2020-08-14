import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBY0SMSiRVmf_id6FFwUN5Ay2Q4rbihQy0",
    authDomain: "twitter-replica-8bea3.firebaseapp.com",
    databaseURL: "https://twitter-replica-8bea3.firebaseio.com",
    projectId: "twitter-replica-8bea3",
    storageBucket: "twitter-replica-8bea3.appspot.com",
    messagingSenderId: "369648912150",
    appId: "1:369648912150:web:0e90a4aaf915d9274db237"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;