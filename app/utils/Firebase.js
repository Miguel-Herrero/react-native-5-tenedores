import Firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA8CtESJGz93KXqB_dz6y3jYAuWK-Ya5X8",
    authDomain: "tenedores-c1359.firebaseapp.com",
    databaseURL: "https://tenedores-c1359.firebaseio.com",
    projectId: "tenedores-c1359",
    storageBucket: "tenedores-c1359.appspot.com",
    messagingSenderId: "1019041580281",
    appId: "1:1019041580281:web:2cadf566bafc9608dfce28"
};

export const firebaseapp = Firebase.initializeApp(firebaseConfig);