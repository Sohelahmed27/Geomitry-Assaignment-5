document.getElementById('btn-triangle').addEventListener('click', function(){
  const base = getElementById('base-tri');
  const height = getElementById('height-tri');

  // validation
  if (isNaN(base || height)){
    alert("Input is not a number");
    return;
  } 
  const result =(.5*base*height).toFixed(2);
  addToCard('Triangle Area', result);
})
document.getElementById('btn-rectagle').addEventListener('click', function(){
  const width = getElementById('width-rec');
  const length = getElementById('length-rec');
  // validation
  if (isNaN(width || length)){
    alert("Input is not a number");
    return;
  }
  const result =(width*length).toFixed(2);
  addToCard('Rectangle Area', result);
})
document.getElementById('btn-parallogram').addEventListener('click', function(){
  const base = getElementById('base-para');
  const height = getElementById('height-para');
  const result =(base*height).toFixed(2);
  addToCard('Parallogram', result);
})
document.getElementById('btn-rhombus').addEventListener('click', function(){
  const digonal1 = getElementById('digonal1');
  const digonal2 = getElementById('digonal2');
  const result =(.5*digonal1*digonal2).toFixed(2);
  addToCard('rhombus Area', result);
})
document.getElementById('btn-pentagon').addEventListener('click', function(){
  const base = getElementById('base-penta');
  const height = getElementById('peri-penta');
  const result =(.5*base*height).toFixed(2);
  addToCard('Pentagon Area', result);
})
document.getElementById('btn-ecllipse').addEventListener('click', function(){
  const a = getElementById('a');
  const b = getElementById('b');
  const result =(3.14*a*b).toFixed(2);
  addToCard('Ecllipse Area', result);

})