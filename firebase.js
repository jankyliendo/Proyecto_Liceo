//// src/firebase.js
//import { initializeApp } from "firebase/app";
//import { getFirestore } from "firebase/firestore";
//
//// --- IMPORTANTE: REEMPLAZA ESTO CON TUS DATOS REALES DE FIREBASE ---
//// Los consigues en: Console Firebase -> Tu Proyecto -> Configuración (rueda dentada) -> General -> Tus Apps
//const firebaseConfig = {
//  apiKey: "AIzaSyBTBakt7BMojntmp_BVXQFXE4423g_D9II", // <--- PEGA TU API KEY AQUÍ
//  authDomain: "liceofidel-8ba6b.firebaseapp.com",
//  projectId: "liceofidel-8ba6b",
//  storageBucket: "liceofidel-8ba6b.firebasestorage.app",
//  messagingSenderId: "46843833096",
//  appId: "1:46843833096:web:52356b55305d3d7a8e1abd"
//};s
//
//// Inicializamos la conexión
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
//
//// Exportamos la base de datos para usarla en la App
//export const db = getFirestore(app);