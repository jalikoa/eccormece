let errors = {};
const password=document.getElementById('password');
const errorDiv=document.getElementById('errorDiv1');
const messDiv = document.getElementById('messDiv1');
function show1(){
  if (password.type == 'password'){
    password.type = 'text';
  } 
  else {
    if (password.type == 'text'){
    password.type = 'password';
  }
  }}
    password.addEventListener('input', () => {
  if (password.value.length < 6) {
    errorDiv.style.display = 'block';
    messDiv.style.display = 'none';
  }
  else {
    errorDiv.style.display = 'none';
    messDiv.style.display = 'block';
  }
});
function loginuser(){
     const nameregexp = /^[\w\D\S]+\s[\w\D\S]$/;
     if (!nameregexp.test(name.value)){
          errors.push({"nameError":"Valid name is only two words with letters only"});
     }
     const emailregexp = /^[^@\WA-Z\s]+@[^@\WA-Z\s\d]+\.[^@\WA-Z\s\d]/;
     if (!emailregexp.test(email.value)){
          errors.push({"emailError":"Invalid Email"});
          return;
     }
     const xhr = checkXmlType();
     xhr.open('POST','http;//localhost/Eccormece/php/login.php',true);
     xhr.onload = ()=>{
          if(xhr.status === 200 ){
               console.log('Login was succesfull');
              
          } else {
               console.error('Sorry there was an error with your login attempt please try again later');
          }
     }
     const data = `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
     xhr.send(data);
}

function checkXmlType(){
     if (window.XMLHttpRequest){
          const request = new XMLHttpRequest();
          return request;
     } else {
          if (window.ActiveXObject){
               const request = new ActiveXObject('Microsoft.XML');
          }
     }
}