var contactApp = angular.module('contactApp',[]);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR2lczGmSnjAsg-hrpB4yiQek5F5YKidw",
  authDomain: "backend-66fb5.firebaseapp.com",
  projectId: "backend-66fb5",
  storageBucket: "backend-66fb5.appspot.com",
  messagingSenderId: "486596490426",
  appId: "1:486596490426:web:d5280d0b56c7be0bf93e83"
};

// Inicializa la base de datos firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();