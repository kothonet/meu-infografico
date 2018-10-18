import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAO8_eFqiew2O-WlCW9HcuiNafwS0anA60",
    authDomain: "meuinfografico-e49ae.firebaseapp.com",
    databaseURL: "https://meuinfografico-e49ae.firebaseio.com",
    projectId: "meuinfografico-e49ae",
    storageBucket: "meuinfografico-e49ae.appspot.com",
    messagingSenderId: "686740756095"
});

export const db = firebaseApp.firestore();
db.settings({timestampsInSnapshots: true});