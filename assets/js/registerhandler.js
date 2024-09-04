const email = document.getElementById('email');
const userName = document.getElementById('username');
const contact = document.getElementById('contact');
const home = document.getElementById('location');
const password = document.getElementById('password');
const profPic = document.getElementById('profpic');
const profPicDiv = document.getElementById('profpicdiv');

const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // More accurate email pattern
const userNameRegExp = /^[A-Za-z\d]+$/i; // Username validation: letters and numbers
const strongPasswordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/; // Strong password

function validateCredAndSend() {
    // Email validation
    if (emailRegExp.test(email.value)) {
        console.log('This email is valid');
    } else {
        console.log('Please try again, providing a more realistic email, please.');
    }

    // Username validation
    if (userNameRegExp.test(userName.value)) {
        console.log('This is a valid name');
    } else {
        console.log('Invalid Name format. The name should only contain letters and be one word.');
    }

    // Password validation
    if (strongPasswordRegExp.test(password.value)) {
        console.log('Password is valid');
    } else {
        console.log('Please note a strong password must have both uppercase, lowercase letters, and numbers.');
    }

    // AJAX request
    const xhr = checkXmlType();
    xhr.open('POST', 'http://localhost/eccormerce/php/registeruser.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log('User registered successfully');
        } else {
            console.log('There was a problem with the registration.');
        }
    };
    // You need to send the form data here.
    const data = `email=${encodeURIComponent(email.value)}&username=${encodeURIComponent(userName.value)}&password=${encodeURIComponent(password.value)}`;
    xhr.send(data);
}

function togglePassword() {
    password.type = (password.type === 'password') ? 'text' : 'password';
}

profPic.onchange = function() {
    profPicDiv.innerHTML = '';
    if (profPic.files[0]) {
        const source = URL.createObjectURL(profPic.files[0]);
        const imgCard = document.createElement('img');
        imgCard.classList.add('prof-img');
        imgCard.src = source;
        profPicDiv.appendChild(imgCard);
    }
}

function checkXmlType() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        return new ActiveXObject('Microsoft.XMLHTTP');
    }
}
