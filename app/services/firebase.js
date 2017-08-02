import * as Firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBs3X209oV1Xe7TDM3FC9IWUy-84tUH9I4",
    authDomain: "comic-relief.firebaseapp.com",
    databaseURL: "https://comic-relief.firebaseio.com",
    projectId: "comic-relief",
    storageBucket: "",
    messagingSenderId: "268298378754"
};

export const firebaseRef = Firebase.initializeApp(config);