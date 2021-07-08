import "firebase/auth";
import "firebase/firebase-firestore";

import firebase from "firebase";

// Firebaseの接続情報をconfigオブジェクトに保持
const config = {
  apiKey: "AIzaSyAuPuMFO8iZtTYD8xnYmf0KJzmYR1F5XE0",
  authDomain: "chart-app-4d5a5.firebaseapp.com",
  projectId: "chart-app-4d5a5",
  storageBucket: "chart-app-4d5a5.appspot.com",
  messagingSenderId: "315411878236",
  appId: "1:315411878236:web:029c7baa010b48d01ff199",
};
firebase.initializeApp(config);

// Authサービスを作ってエクスポート。各画面でこれを利用する
const auth = firebase.auth();
export default auth;
