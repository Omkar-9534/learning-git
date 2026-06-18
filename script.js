const form = document.querySelector("form");
const colorInput = document.querySelector(".color-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const color = colorInput.value.trim();

  if (color === "") {
    alert("Please enter a color!");
    return;
  }

  document.body.style.backgroundColor = color;

  colorInput.value = "";
});

console.log("Script loaded successfully!");