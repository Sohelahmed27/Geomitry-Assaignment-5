function getElementById(elementId) {
  const elementFeild = document.getElementById(elementId);
  const elementString = elementFeild.value;
  const element = parseFloat(elementString);
  return element;
}
