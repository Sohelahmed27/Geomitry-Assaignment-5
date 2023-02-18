function getElementById(elementId) {
  const elementFeild = document.getElementById(elementId);
  const elementString = elementFeild.value;
  const element = parseFloat(elementString);
  return element;
}

function addToCard(AreaName, result){
  const container = document.getElementById('result-card');
  const li = document.createElement('li');
  li.innerHTML = `
  <ol>
  <li>${AreaName}: ${result} cm <sup>2</sup></li>
  </ol>
  `
  container.appendChild(li);
  
  // const newResult = document.createElement('div');
}