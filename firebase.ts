// firebase.ts

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // 추가됨: 데이터베이스 도구
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

// 파이어베이스 앱 초기화
const app = initializeApp(firebaseConfig);

// 애널리틱스 (통계) - 에러 방지용 안전 장치 포함
let analytics;
try {
  if (typeof window !== 'undefined') {
    analytics = getAnalytics(app);
  }
} catch (e) {
  console.warn("Firebase Analytics failed to initialize", e);
}

// 1. 인증 도구 (로그인용) 내보내기
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// 2. 데이터베이스 도구 (장부용) 내보내기 - [새로 추가된 부분]
export const db = getFirestore(app);

export default app;