document.getElementById('btn-triangle').addEventListener('click', function(){
  const base = getElementById('base-tri');
  const height = getElementById('height-tri');

  // validation
  if (isNaN(base && height)){
    alert("Input a valid number");
    return;
  }
  const result =(.5*base*height).toFixed(2);
  if(result <=0){
    alert("Input a Positive number");
    return;
  }
  addToCard('Triangle Area', result);
})

// Calculate rectangle Area
document.getElementById('btn-rectagle').addEventListener('click', function(){
  const width = getElementById('width-rec');
  const length = getElementById('length-rec');
  // validation
  if (isNaN(width && length) ){
    alert("Input a valid number");
    return;
  }
  const result =(width*length).toFixed(2);
  if(result <=0){
    alert("Input a Positive number");
    return;
  }
  addToCard('Rectangle Area', result);
})

// Calculate parallogram Area
document.getElementById('btn-parallogram').addEventListener('click', function(){
  const base = getElementById('base-para');
  const height = getElementById('height-para');
  // validation
  if (isNaN(base && height || height&&base <= 0)){
    alert("Input is not a number");
    return;
  } 
  const result =(base*height).toFixed(2);
  if(result <=0){
    alert("Input a Positive number");
    return;
  }

  addToCard('Parallogram', result);
})

// Calculate rhombus Area
document.getElementById('btn-rhombus').addEventListener('click', function(){
  const digonal1 = getElementById('digonal1');
  const digonal2 = getElementById('digonal2');

  // validation
  if (isNaN(digonal1 && digonal2)){
    alert("Input is not a number");
    return;
  } 
  const result =(.5*digonal1*digonal2).toFixed(2);
  if(result <=0){
    alert("Input a Positive number");
    return;
  }
  addToCard('Rhombus Area', result);
})

// Calculate pentagon Area
document.getElementById('btn-pentagon').addEventListener('click', function(){
  const base = getElementById('base-penta');
  const height = getElementById('peri-penta');
  // Validation
  if (isNaN(base && height)){
    alert("Input is not a number");
    return;
  }
  
  const result =(.5*base*height).toFixed(2);
  if(result <=0){
    alert("Input a Positive number");
    return;
  }
  addToCard('Pentagon Area', result);
})

// Calculate ecllipse Area
document.getElementById('btn-ecllipse').addEventListener('click', function(){
  const a = getElementById('a');
  const b = getElementById('b');

  if (isNaN(a && b)){
    alert("Input is not a number");
    return;
  }
  const result =(3.14*a*b).toFixed(2);
  if(result <=0){
    alert("Input a Positive number");
    return;
  }
  addToCard('Ecllipse Area', result);

})

//blog

document.getElementById('blog').addEventListener('click', function(){
  window.location.href = 'http://127.0.0.1:5500/blogs.html';
})