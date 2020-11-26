const buttonElement = document.getElementById("buttonClear");
const inputElement = document.getElementById("inputValue");
const labelElement = document.getElementById("resultLabel");

executeConversion = () => {
  let value = inputElement.value;
  value = value.toString();
  console.log(value);

  if (value.includes("1") || value.includes("0")) {
    try {
      value = parseInt(value, 2);
      if (isNaN(value)) {
        labelElement.innerHTML = "Insira um número";
      } else {
        labelElement.innerHTML = value;
      }
    } catch {
      alert("Infelizmente não foi possível converter");
    }
  } else {
    labelElement.innerHTML = "Precisa ser Binário";
  }
};
