// Core

function translate(input) {

    const validChars = ["A", "a", "Á", "á", "B", "b", "C", "c", "E", "e", "É", "é", "F", "f", "G", "g", "I", "i", "Í", "í", "M", "m", "O", "o", "Ó", "ó", "P", "p", "S", "s", "T", "t"];
    const outputChars = ["E", "e", "É", "é", "T", "t", "S", "s", "A", "a", "Á", "á", "G", "g", "F", "f", "O", "o", "Ó", "ó", "P", "p", "I", "i", "Í", "í", "M", "m", "C", "c", "B", "b"];
    
    var output = ""

    for(char of input){
        if(validChars.includes(char)){
            output += outputChars[validChars.indexOf(char)];
        }
        else{
            output += char;
        }
    }
    
    output = output.replace(/LL/g, '#.110');
    output = output.replace(/L/g, '#.10');
    output = output.replace(/ll/g, '#.111');
    output = output.replace(/l/g, '#.11');
    
    output = output.replace(/#.110/g, 'L');
    output = output.replace(/#.10/g, 'LL');
    output = output.replace(/#.111/g, 'l');
    output = output.replace(/#.11/g, 'll');
    
    return output;
}

// Translation boxes

const inputTextarea = document.getElementById('txtaInput');
const outputTextarea = document.getElementById('txtaOutput');

function onInputChange() {

    var translation = translate(inputTextarea.value);

    outputTextarea.innerHTML = translation;
}

function checkTextSize() {
    var threshold = 160;
    
    if(inputTextarea.value.length > threshold) {
        inputTextarea.classList.add('textarea-smaller-text');
        outputTextarea.classList.add('textarea-smaller-text');
    }
    else {
        inputTextarea.classList.remove('textarea-smaller-text');
        outputTextarea.classList.remove('textarea-smaller-text');
    }
}

inputTextarea.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight + 2) + 'px';
    outputTextarea.style.height = (this.scrollHeight + 2) + 'px';
});

inputTextarea.style.height = (inputTextarea.scrollHeight + 2) + 'px';

outputTextarea.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight + 2) + 'px';
});

outputTextarea.style.height = (outputTextarea.scrollHeight + 2) + 'px';

// Function to toggle between light and dark themes
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
  }

  // Add an event listener to an element that triggers the theme toggle
  const themeToggleButton = document.getElementById('theme-toggle-button');
  if (themeToggleButton) {
    themeToggleButton.addEventListener('click', toggleTheme);
  }