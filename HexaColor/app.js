// Step 1
// Create Onload Handler

// Step 2
// Create function for random color

// Step 3
// Get all necessary link

// Step 4
// Evnt Handler

// 1 Create Onload Handler


// Create function HexaDesimalNumber

function colorCodeHexa ()
{
    var red = Math.floor(Math.random()*255);
    var green = Math.floor(Math.random()*255);
    var blue = Math.floor(Math.random()*255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

// Cllect all referances
var bacground = document.querySelector('.main');
var code = document.querySelector('input');
var btn = document.querySelector('.btn');

// Event Handler
    
btn.addEventListener('click', function(){
    var colorCode = colorCodeHexa();
    bacground.style.backgroundColor = colorCode;
    code.value = colorCode;
});



