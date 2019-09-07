import firebase from 'firebase'
var firebaseConfig = {
  apiKey: "AIzaSyDFDbb1jmRhyTaMLrcYnb0L-EJADUBb1xQ",
  authDomain: "raisingstar-5504c.firebaseapp.com",
  databaseURL: "https://raisingstar-5504c.firebaseio.com",
  projectId: "raisingstar-5504c",
  storageBucket: "raisingstar-5504c.appspot.com",
  messagingSenderId: "1075371251867",
  appId: "1:1075371251867:web:fb856f1236e955b8ac0e3e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



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


