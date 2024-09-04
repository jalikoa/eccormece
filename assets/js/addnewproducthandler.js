const img1=document.getElementById('img1');
  const img2=document.getElementById('img2');
  const images=document.getElementById('imgresults');
  const img1res = document.getElementById('image1');
  const img2res = document.getElementById('image2');
  function file1(){
    img1.click();
  }
   function file2(){
    img2.click();
  }
  img1.onchange = function (){
    img1res.innerHTML = '';
    const imagediv = document.createElement('img');
    imagediv.src = URL.createObjectURL(img1.files[0]);
    imagediv.classList.add('product-div');
    img1res.appendChild(imagediv);
  }
  img2.onchange = function (){
    img2res.innerHTML = '';
    const imagediv = document.createElement('img');
    imagediv.src = URL.createObjectURL(img2.files[0]);
    imagediv.classList.add('product-div');
    img2res.appendChild(imagediv);
  }
  
