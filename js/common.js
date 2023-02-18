function getElementById(elementId) {
  const elementFeild = document.getElementById(elementId);
  const elementString = elementFeild.value;
  const element = parseFloat(elementString);
  return element;
}

function addToCard(AreaName, result){
  const container = document.getElementById('result-card');
  const p = document.createElement('p');
  p.innerHTML =`<li>${AreaName}: ${result} cm<sup>2</sup></li>`
  container.appendChild(p);
  
  // const newResult = document.createElement('div');
}