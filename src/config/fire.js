// Your web app's Firebase configuration
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDcqZYcNgx1pSYjJQPDqiY2XqJ1tBAv0hY",
    authDomain: "portfoliolab-f7cd1.firebaseapp.com",
    databaseURL: "https://portfoliolab-f7cd1.firebaseio.com",
    projectId: "portfoliolab-f7cd1",
    storageBucket: "portfoliolab-f7cd1.appspot.com",
    messagingSenderId: "599275260449",
    appId: "1:599275260449:web:e6a6f712ca4fc727c23160",
    measurementId: "G-QKGJ9QQWKZ"
};
// Initialize Firebase
const fire = firebase.initializeApp(config);
export default fire