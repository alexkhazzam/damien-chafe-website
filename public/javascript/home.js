const writeableTextWrapper = document.querySelector('.writeable-text-wrapper');
const writeableText = document.querySelector('.writeable-text');
const ctaButtons = document.querySelector('.cta-actions');
const slideInUnderline = document.querySelector('.slide-underline');

const text = "Damien Chafe's Tennis Academy";

let i = 0;
function outputText() {
  if (i === 29) {
    ctaButtons.style.display = 'block';
    slideInUnderline.style.display = 'block';
  } else {
    setTimeout(() => {
      writeableText.textContent += text.charAt(i);
      i++;
      outputText();
    }, 50);
  }
}

outputText();
