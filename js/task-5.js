function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const button = document.querySelector(".change-color");
const span = document.querySelector(".color");

const handleClick = () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.textContent = color;
};

button.addEventListener('click', handleClick);