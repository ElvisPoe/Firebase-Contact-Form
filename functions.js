//alert("Hello world");

// Initialize Firebase
var config = {
    apiKey: "AIzaSyARyG3r8qyZOxC0ZszFhmPdbjp5qDE7Yv8",
    authDomain: "contactform-38198.firebaseapp.com",
    databaseURL: "https://contactform-38198.firebaseio.com",
    projectId: "contactform-38198",
    storageBucket: "contactform-38198.appspot.com",
    messagingSenderId: "946138517125"
};
firebase.initializeApp(config);

var users = firebase.database().ref('users');
var storageRef = firebase.storage().ref();

// Form Submit & Colect Data Function
document.getElementById('myContactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
    var name = document.getElementById("name").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var userPhoto = document.getElementById("photo").files[0];

    saveUser(name, lastName, email, phone, userPhoto);

    showAlert();
}

// Save User Function
function saveUser(name, lastName, email, phone, userPhoto){
    /// Save User Info
    var newUserRef = users.push();
    newUserRef.set({
        name: name,
        lastName: lastName,
        email: email,
        phone: phone
    });

    // Save User Image
    storageRef.child('images/' + name + lastName + '-' +userPhoto.name).put(userPhoto);
}

function showAlert(){
    document.getElementById("myContactForm").reset();

    $("#success-message").fadeIn(750);
    setTimeout(function(){
        $("#success-message").fadeOut(1000);
    }, 3000);
}