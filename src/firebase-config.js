// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyBYglewTlbuqEsI-atBP7y5AorVFLhpdGs',
	authDomain: 'chat-app-8436d.firebaseapp.com',
	projectId: 'chat-app-8436d',
	storageBucket: 'chat-app-8436d.appspot.com',
	messagingSenderId: '28056722562',
	appId: '1:28056722562:web:de827fb8d7b6e9e5d9a89b',
	measurementId: 'G-EPYKG8KX2M',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
