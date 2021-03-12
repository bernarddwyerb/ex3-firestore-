import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCaPCa7QOYW0H1vOLA1Au-3qx6Fl7WalOU",
  authDomain: "panier-achats-bdb.firebaseapp.com",
  projectId: "panier-achats-bdb",
  storageBucket: "panier-achats-bdb.appspot.com",
  messagingSenderId: "670733747915",
  appId: "1:670733747915:web:84b3004983ee4e13a2bd4e",
  measurementId: "G-CX1RX1RHFC"
};

// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = fbAppli.firestore();
/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) la référence à "bd" pour pouvoir l'utiliser dans le composant ListeProduits
export default bd;