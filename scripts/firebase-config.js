// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNzfZFqkC6Z_0KPk32MZbrukWnwLayQzM",
  authDomain: "lenzcure-17d63.firebaseapp.com",
  projectId: "lenzcure-17d63",
  storageBucket: "lenzcure-17d63.firebasestorage.app",
  messagingSenderId: "1008820626322",
  appId: "1:1008820626322:web:93d74787d9fa9e18fa574b",
  measurementId: "G-LXF6TXRX35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("Firebase initialized for LenzCure");
