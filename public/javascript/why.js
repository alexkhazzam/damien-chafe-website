const alertHeading = document.querySelector('.alert-heading');
const coachingHeader = document.querySelector('.coaching-header');
const coachingSpan = document.querySelector('.coaching-span');

const text = 'Tennis Experience';

let i = 0;
function outputText() {
  if (i === 17) {
    return;
  } else {
    setTimeout(() => {
      alertHeading.textContent += text.charAt(i);
      i++;
      outputText();
    }, 50);
  }
}

const text2 = 'Coaching Experience';

outputText();

let k = 0;
function writeText() {
  if (k === 19) {
    return;
  } else {
    setTimeout(() => {
      coachingHeader.textContent += text2.charAt(k);
      k++;
      writeText();
    }, 50);
  }
}

const text3 = `<ul>
<li>Coached at New York Tennis Academy</li>
<li>Coached at Parkwood Tennis Camp</li>
<li>Head tennis coach at Great Neck Estates summer camp</li>
<li>5-year private tennis instructor</li>
</ul>`;

let y = 0;
function writeCoachingSpan() {
  if (y === 19) {
    return;
  } else {
    setTimeout(() => {
      coachingHeader.innerHTML += text3.charAt(y);
      y++;
      writeCoachingSpan();
    }, 50);
  }
}

writeText();
