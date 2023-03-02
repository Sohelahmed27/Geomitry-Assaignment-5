function getElementById(elementId) {
  const elementFeild = document.getElementById(elementId);
  const elementString = elementFeild.value;
  const element = parseFloat(elementString);
  return element;
}

function addToCard(serial,AreaName, result){
  const container = document.getElementById('result-card');
  const tr = document.createElement('tr');
  tr.innerHTML =`<tr>
                    <td>${serial}.</td>
                    <td>${AreaName}: ${result} cm<sup>2</sup></td>
                    </tr>`
  container.appendChild(tr);
}