// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyDMPgvAcddrzJtAa-l9RfymO_QGzD9M3x0",
    authDomain: "loged-d9426.firebaseapp.com",
    databaseURL: "https://loged-d9426.firebaseio.com",
    projectId: "loged-d9426",
    storageBucket: "loged-d9426.appspot.com",
    messagingSenderId: "185023163915",
    appId: "1:185023163915:web:1b57a2b90cd1e542db210e",
    measurementId: "G-MM0GRH00MD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  var messageRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e)
{
    e.preventDefault();

    var name = getInputVal('name');
    var email = getInputVal('email');
    var concern = getInputVal('concern');

    saveMessage(name, email, concern);

    document.querySelector('.alert').style.display = 'block';


    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);
    
    document.getElementById('contactForm').reset();
} 


function getInputVal(id) {
    return document.getElementById(id).value;
}

function saveMessage(name, email, concern) {
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        concern: concern,

    });
}