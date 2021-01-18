let typing = document.querySelector(".typing");
let addTexts = [
  "Hello Freo",
  "Hello Friend",
  "Saving The World.",
  "It's Not Real. ...",
  "It's Nuewq",
  "Not Real!",
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
  currentText = addTexts[count];
  if (letter.length < currentText.length) {
    letter = currentText.slice(0, ++index);
    typing.textContent = letter;
    setTimeout(type, 200);
  } else {
    setTimeout(erase, 100);
  }
}
function erase() {
  if (letter.length > 0) {
    letter = currentText.slice(0, --index);
    typing.textContent = letter;
    setTimeout(erase, 50);
  } else {
    if (count < addTexts.length - 1) {
      count++;
      index = 0;
      setTimeout(type, 50);
    } else {
      setTimeout(final, 100);
    }
  }
}
function final() {
  currentText = "Murad Agha...";
  letter = currentText.slice(0, ++index);
  index++;
  typing.textContent = letter;
  setTimeout(final, 100);
}
window.addEventListener("load", function () {
  setTimeout(type, 2000);
});
