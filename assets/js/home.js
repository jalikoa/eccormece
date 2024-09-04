const searchInput = document.getElementById('search');





function searchProduct(){
     const inputPattern = /^[\w\b\s\d\'\.]+$/i;
     if (inputPattern.test(searchInput.value)){
          
          const xhr = checkXmlType();
          xhr.open('GET','http://localhost/Eccomerce/php/searchproduct.php',true);
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          xhr.onload = function() {
              if (xhr.status === 200) {
                  console.log('Search is successfully initiated');
              } else {
                  console.log('There was a problem with tthe initiation of the earch.');
              }
          };

          const data = `input${encodeURIComponent(searchInput.value)}`;
          xhr.send(data);

     } else {
          alert('The product names must have only letters and not any special character');
     }
}



function checkXmlType(){
     if(window.XMLHttpRequest){
          const request = new XMLHttpRequest();
          return request;
     } else {
          if (window.ActiveXObject){
               const request = new ActiveXObject('Microsoft.XMLHTTP');
               return request;
          }
     }
}