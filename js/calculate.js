document.getElementById('btn-triangle').addEventListener('click', function(){
  const base = getElementById('base-tri');
  console.log(base);
  const height = getElementById('height-tri');
  const result =(.5*base*height).toFixed(2);
  const container = document.getElementById('result-card');
  const li = document.createElement('li');
  li.innerHTML = `
  <li>Triangle: ${result} cm <sup>2</sup></li>
  `
  container.appendChild(li);
  
  // const newResult = document.createElement('div');


})
document.getElementById('btn-rectagle').addEventListener('click', function(){
  console.log('triangle clicked');
})
document.getElementById('btn-parallogram').addEventListener('click', function(){
  console.log('triangle clicked');
})
document.getElementById('btn-rhombus').addEventListener('click', function(){
  console.log('triangle clicked');
})
document.getElementById('btn-pentagon').addEventListener('click', function(){
  console.log('btn-pentagon');
})
document.getElementById('btn-ecllipse').addEventListener('click', function(){
  console.log('btn-ecllipse');
})