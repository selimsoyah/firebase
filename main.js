
document.querySelector("#forme").addEventListener("submit",function(e){
    e.preventDefault()
    submitProduct()
})

//   1/ import firebase libraries and api key
var firebaseConfig = {
    apiKey: "AIzaSyA3BntNp1TjNRrculkV1P453GOUtcQUmwo",
    authDomain: "first-project-99769.firebaseapp.com",
    databaseURL: "https://first-project-99769.firebaseio.com",
    projectId: "first-project-99769",
    storageBucket: "first-project-99769.appspot.com",
    messagingSenderId: "75603161226",
    appId: "1:75603161226:web:9108981eb8d373b3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//  2/ create database variable
let database = firebase.database()
//  3/ create ref
let ref = database.ref("product") 
function submitProduct(){
// 4/ prepare data 
let data = {
      name : document.querySelector("#name").value,
      email : document.querySelector("#Email").value,
      number: document.querySelector("#number").value,
      link : document.querySelector("#link").value,
      message : document.querySelector("#message").value

}
ref.push(data)
}
//  5/ upload data (pusch/set)
