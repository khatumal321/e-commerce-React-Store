 import firebase from 'firebase'
 import 'firebase/firestore'
 import 'firebase/storage'
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAdjrQ_Y6TjQypT9nwf04UW0VEP1TeZCuw",
  authDomain: "e-commerce-web-9ca3e.firebaseapp.com",
  databaseURL: "https://e-commerce-web-9ca3e.firebaseio.com",
  projectId: "e-commerce-web-9ca3e",
  storageBucket: "e-commerce-web-9ca3e.appspot.com",
  messagingSenderId: "119918748146",
  appId: "1:119918748146:web:e6c9aee54a2a371fca0b6b"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp




// imageUpload(e){
//     let fileName = e.target.files[0].name
//     let ref = firebase.storage().ref('/').child(`images/${fileName}`)
//     let imagePut = ref.put(e.target.files[0])
//     imagePut.on('state_changed',()=>{
//         ref.getDownloadURL()
//         .then((url)=>{
//             console.log("Url==>",url)
//         })
//     })
// }


