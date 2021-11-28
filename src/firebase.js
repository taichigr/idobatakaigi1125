import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyAgfvvoQ4DYTNut1FlXHLMQI4qn3twCVzA",
    authDomain: "chat-appliation-idobatakaigi.firebaseapp.com",
    projectId: "chat-appliation-idobatakaigi",
    storageBucket: "chat-appliation-idobatakaigi.appspot.com",
    messagingSenderId: "69566290008",
    appId: "1:69566290008:web:7d8125579b2428e1b1122d"
  };

  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  const messageRef = database.ref('messages');

  export const pushMessage = ({name, text}) => {
    messageRef.push({name, text});
  }