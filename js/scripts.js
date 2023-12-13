// Core

function translate(input) {

    var output = input

    output = output.replace(/A/g, '#011');
    output = output.replace(/E/g, '#111');
    
    output = output.replace(/Á/g, '#031');
    output = output.replace(/É/g, '#131');
    
    output = output.replace(/B/g, '#012');
    output = output.replace(/T/g, '#112');
    
    output = output.replace(/C/g, '#013');
    output = output.replace(/S/g, '#113');
    
    output = output.replace(/F/g, '#014');
    output = output.replace(/G/g, '#114');
    
    output = output.replace(/I/g, '#015');
    output = output.replace(/O/g, '#115');
    
    output = output.replace(/Í/g, '#035');
    output = output.replace(/Ó/g, '#135');
    
    output = output.replace(/LL/g, '#116');
    output = output.replace(/L/g, '#016');
    
    output = output.replace(/M/g, '#017');
    output = output.replace(/P/g, '#117');

    output = output.replace(/a/g, '#001');
    output = output.replace(/e/g, '#101');
    
    output = output.replace(/á/g, '#021');
    output = output.replace(/é/g, '#121');
    
    output = output.replace(/b/g, '#002');
    output = output.replace(/t/g, '#102');
    
    output = output.replace(/c/g, '#003');
    output = output.replace(/s/g, '#103');
    
    output = output.replace(/f/g, '#004');
    output = output.replace(/g/g, '#104');
    
    output = output.replace(/i/g, '#005');
    output = output.replace(/o/g, '#105');
    
    output = output.replace(/í/g, '#025');
    output = output.replace(/ó/g, '#125');
    
    output = output.replace(/ll/g, '#106');
    output = output.replace(/l/g, '#006');
    
    output = output.replace(/m/g, '#007');
    output = output.replace(/p/g, '#107');

    // Decode

    console.log(output);

    output = output.replace(/#011/g, 'E');
    output = output.replace(/#111/g, 'A');
    
    output = output.replace(/#031/g, 'É');
    output = output.replace(/#131/g, 'Á');
    
    output = output.replace(/#012/g, 'T');
    output = output.replace(/#112/g, 'B');
    
    output = output.replace(/#013/g, 'S');
    output = output.replace(/#113/g, 'C');
    
    output = output.replace(/#014/g, 'G');
    output = output.replace(/#114/g, 'F');
    
    output = output.replace(/#015/g, 'O');
    output = output.replace(/#115/g, 'I');
    
    output = output.replace(/#035/g, 'Ó');
    output = output.replace(/#135/g, 'Í');
    
    output = output.replace(/#116/g, 'L');
    output = output.replace(/#016/g, 'LL');
    
    output = output.replace(/#017/g, 'P');
    output = output.replace(/#117/g, 'M');

    output = output.replace(/#001/g, 'e');
    output = output.replace(/#101/g, 'a');
    
    output = output.replace(/#021/g, 'é');
    output = output.replace(/#121/g, 'á');
    
    output = output.replace(/#002/g, 't');
    output = output.replace(/#102/g, 'b');
    
    output = output.replace(/#003/g, 's');
    output = output.replace(/#103/g, 'c');
    
    output = output.replace(/#004/g, 'g');
    output = output.replace(/#104/g, 'f');
    
    output = output.replace(/#005/g, 'o');
    output = output.replace(/#105/g, 'i');
    
    output = output.replace(/#025/g, 'ó');
    output = output.replace(/#125/g, 'í');
    
    output = output.replace(/#106/g, 'l');
    output = output.replace(/#006/g, 'll');
    
    output = output.replace(/#007/g, 'p');
    output = output.replace(/#107/g, 'm');
    
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