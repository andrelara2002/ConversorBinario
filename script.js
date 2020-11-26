const buttonElement = document.getElementById("buttonClear");
const inputElement = document.getElementById("inputElement");
const labelElement = document.getElementById("resultLabel");

inputElement.addEventListener('input', event => {

  let value = inputElement.value
  value = value.toString();

  if (value.includes("2") || value.includes("3") || value.includes('4') || value.includes('5')  || value.includes('6')  || value.includes('7')  || value.includes('8')  || value.includes('9')) {
    labelElement.innerHTML = "Precisa ser Binário";
  } else {
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
  }
})

clearWorkspace = () => {
  labelElement.innerHTML = 'Digite um binário'
  inputElement.value = ''
  inputElement.focus = '';
}
