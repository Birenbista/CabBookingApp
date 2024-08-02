// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBNhPRD2n69lU3Equ7fIqsdjPU5Ccol_As',
    authDomain: 'lab4-react-native-27a12.firebaseapp.com',
    projectId: 'lab4-react-native-27a12',
    storageBucket: 'lab4-react-native-27a12.appspot.com',
    messagingSenderId: '878703389629',
    appId: '1:878703389629:web:3c00c67924b66ad8c8c0d4',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
