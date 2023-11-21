function hexCodeGenerator1() {
    let randomHexCode = Math.floor(Math.random() * 16777215).toString(16);
 
    if (randomHexCode.length < 6) {
       randomHexCode = '0' + randomHexCode;
    }
 
    return '#' + randomHexCode;
 }
 
 
 function divGenerator1() {
    let colors = document.getElementById('colors');
 
    if (colors.querySelectorAll('div').length === 0) {
       // create bunch of divs with for loop
       for (let i = 0; i < 50; i++) {
          let div = document.createElement('div');
          div.classList.add('colors1-child');
          let hexcode1 = hexCodeGenerator1();
          div.style.backgroundColor = hexcode1;
          div.innerText = hexcode1;
          div.setAttribute('data-colors-1', hexcode1);
          colors.appendChild(div);
          document.getElementById('generate').innerText = 'Re generate'
       }
       document.getElementById('generate').removeEventListener('click', divGenerator1)
    } else {
       let allChildElemets = colors.querySelectorAll('div');
 
       for (let x = 0; x < allChildElemets.length; x++) {
          let updatedHexCode = hexCodeGenerator1();
          allChildElemets[x].style.backgroundColor = updatedHexCode;
          allChildElemets[x].innerText = updatedHexCode;
       }
    }
 }