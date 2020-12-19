const mainHeader = document.querySelector('.main-header');

const text = 'Rates and Fees';
let i = 0;
function outputText() {
  if (i === 17) {
    return;
  } else {
    setTimeout(() => {
      mainHeader.textContent += text.charAt(i);
      i++;
      outputText();
    }, 50);
  }
}

outputText();
