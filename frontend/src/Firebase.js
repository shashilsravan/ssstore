import firebase from 'firebase/app';
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: 'AIzaSyB8S0yO7sITOZX7fZj69IiTNRtmsNkTfmQ',
    authDomain: 'ecommerce-mine-cfc8c.firebaseapp.com',
    projectId: 'ecommerce-mine-cfc8c',
    storageBucket: 'ecommerce-mine-cfc8c.appspot.com',
    messagingSenderId: '347300670121',
    appId: '1:347300670121:web:5ccb785b7d7a5cfefe97b8'
})

export const auth = app.auth()
export default app

