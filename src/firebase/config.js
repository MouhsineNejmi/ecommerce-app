import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCfp2EoQ0qiO7_4yVW7-VssvB-M2RvQUlA",
  authDomain: "ecommerce-app-fa139.firebaseapp.com",
  projectId: "ecommerce-app-fa139",
  storageBucket: "ecommerce-app-fa139.appspot.com",
  messagingSenderId: "40240066649",
  appId: "1:40240066649:web:be20dae889d64034060148",
};

export const firebaseApp = initializeApp(firebaseConfig);
