function getElementById(elementId) {
  const elementFeild = document.getElementById(elementId);
  const elementString = elementFeild.value;
  const element = parseFloat(elementString);
  return element;
}

function addToCard(AreaName, result){
  const container = document.getElementById('result-card');
  const h5 = document.createElement('h5');
  h5.innerHTML =`<ul><li>${AreaName}: ${result} cm<sup>2</sup></li></ul>`
  container.appendChild(h5);
  
  // const newResult = document.createElement('div');
}