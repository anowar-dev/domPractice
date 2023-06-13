/**
 * Project requirement
 * Change the background color by generating random Hex color by click event
 * Also display the color code into a disabled input field
 * Add a button to copy the color code
 * Add a toast massage for notify the user when copied the color code
 * Make typeable input field for color code
 * Show rgb color too do not need edit
 * user can also copy the rgb color
 */

// Global
const massDiv = document.createElement('div');


window.onload = () => {
  main();
};

// Function 1 generate three random number red green blue
// return an object
function generateDecimalColor(){
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return{red, green, blue}
}

// Function 2 colorGenerator
function hexGenerator({red, green, blue}) {

  const getTwoCode = (value) =>{
    const hex = value.toString(16);
    return hex.length == 1 ? `0${hex}` : hex;
  }
  return `#${getTwoCode(red)}${getTwoCode(green)}${getTwoCode(blue)}`;
};

// Function 3 RGB color
function rgbColor({red, green, blue}){
  return `rgb(${red}, ${green}, ${blue})`;
}

/**
 * Function 4 Hex to rgb
 * @param {string} hex 
 */
function hexToRgb (hex){
  const red = parseInt(hex.slice(0, 2),16);
  const green = parseInt(hex.slice(2, 4),16);
  const blue = parseInt(hex.slice(4),16);

  return `rgb(${red}, ${green}, ${blue})`;
}

function main() {
  const bacground = document.querySelector(".main");
  const output = document.querySelector("#output");
  const changebtn = document.querySelector(".changebtn");
  const copyBtn = document.querySelector(".copy-btn");
  const copyBtn2 = document.querySelector("#copy-btn2");
  const output2 = document.querySelector("#output2");

  changebtn.addEventListener("click", function () {
    const color = generateDecimalColor();
    const hex = hexGenerator(color);
    const rgb = rgbColor(color);
    bacground.style.backgroundColor = hex;
    output.value = hex.substring(1).toUpperCase();
    output2.value = rgb;
  });

  copyBtn.addEventListener('click', function(){
    navigator.clipboard.writeText(`#${output.value}`);
    if(isValid(output.value)){
      tostMassage(`<span class="spanMassage">#${output.value}</span> Copied`);
      setTimeout(function () {
        massDiv.remove();
      }, 1500);
    }
    else{
      alert("It's a not valid color code");
    }
  });

  copyBtn2.addEventListener("click", function () {
    navigator.clipboard.writeText(output2.value);
      tostMassage(`<span class="spanMassage">${output2.value}</span> Copied`);
      setTimeout(function () {
        massDiv.remove();
      }, 1500);
  });

  output.addEventListener('keyup', function(event){
    const color = event.target.value;
    if(color){
      output.value = color.toUpperCase();
      if(isValid(color)){
        bacground.style.backgroundColor = `#${color}`;
        output2.value = hexToRgb(color);
      }
    };
  });
};

function tostMassage(massage){
  massDiv.innerHTML = massage;
  massDiv.classList.add('massaget');
  massDiv.classList.add("tost-massage-slide-in");
  document.body.appendChild(massDiv);
};

/**
 * 
 * @param {string} color 
 */
function isValid(color){
  if(color.length != 6)return false;

  return /^[0-9A-Fa-f]{6}$/i.test(color);
}


// Step 1 Create Onload Handler
// Step 2 Create function for random color
// Step 3 Get all necessary link
// Step 4 Handle the Change button click event
// Step 5 handle the copy button click event
// Step 6 create a toast massage 
// step 7 create diamic toast massage
// step 8 clear the tost massage
// Step 9 Create isValid function
// Step 10 implement handler copy & input field
// Step 11 prevent coping hex code is it not valid
// Step 12 Refactor the color generator function
// Step 13 Update color code to display rgb colors
// Step 14 create hexadecimal to RGB function
// Step 15 update rgb color into input field
// Step 16 handle the copy button
