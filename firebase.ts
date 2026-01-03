import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBgYwGu4d7WG7IAHVM9sjtHNbw7nkAeU00",
  authDomain: "suma-683cc.firebaseapp.com",
  projectId: "suma-683cc",
  storageBucket: "suma-683cc.firebasestorage.app",
  messagingSenderId: "907159033378",
  appId: "1:907159033378:web:6be59a465e6de4d4a09c7b",
  measurementId: "G-KWNNLDEG8S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Safely initialize analytics (might be blocked in some environments)
let analytics;
try {
  analytics = getAnalytics(app);
} catch (e) {
  console.warn("Firebase Analytics failed to initialize", e);
}

// Initialize Auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;