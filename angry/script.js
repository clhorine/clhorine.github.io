
function randombg1(){
  var random= Math.floor(Math.random() * 10) + 0;
  var bigSize = ["url('images/angry/angry01.jpg')",
                 "url('images/angry/angry02.jpg')",
                 "url('images/angry/angry03.jpg')",
                 "url('images/angry/angry04.jpg')",
                 "url('images/angry/angry05.jpg')",
                 "url('images/angry/angry06.jpg')",
                 "url('images/angry/angry07.jpg')",
                 "url('images/angry/angry08.jpg')",
                 "url('images/angry/angry09.jpg')",
                 "url('images/angry/angry10.jpg')"];
  document.getElementById("main").style.backgroundImage=bigSize[random];
  var element = document.getElementById("angry");
  element.classList.remove("hidden");

  var element = document.getElementById("angriest");
  element.classList.add("hidden");

  var element = document.getElementById("angrier");
  element.classList.add("hidden");
  var element = document.getElementById("main");
  element.classList.add("duotone");
 
}


function randombg2(){
  var random= Math.floor(Math.random() * 10) + 0;
  var bigSize = ["url('images/angrier/angrier01.jpg')",
                 "url('images/angrier/angrier02.jpg')",
                 "url('images/angrier/angrier03.jpg')",
                 "url('images/angrier/angrier04.jpg')",
                 "url('images/angrier/angrier05.jpg')",
                 "url('images/angrier/angrier06.jpg')",
                 "url('images/angrier/angrier07.jpg')",
                 "url('images/angrier/angrier08.jpg')",
                 "url('images/angrier/angrier09.jpg')",
                 "url('images/angrier/angrier10.jpg')"];
  document.getElementById("main").style.backgroundImage=bigSize[random];
  var element = document.getElementById("angrier");
  element.classList.remove("hidden");

  var element = document.getElementById("angry");
  element.classList.add("hidden");

  var element = document.getElementById("angriest");
  element.classList.add("hidden");
  var element = document.getElementById("main");
  element.classList.add("duotone");
  

  
  
}

function randombg3(){
  var random= Math.floor(Math.random() * 10) + 0;
  var bigSize = ["url('images/angriest/angriest01.jpg')",
                 "url('images/angriest/angriest02.jpg')",
                 "url('images/angriest/angriest03.jpg')",
                 "url('images/angriest/angriest04.jpg')",
                 "url('images/angriest/angriest05.jpg')",
                 "url('images/angriest/angriest06.jpg')",
                 "url('images/angriest/angriest07.jpg')",
                 "url('images/angriest/angriest08.jpg')",
                 "url('images/angriest/angriest09.jpg')",
                 "url('images//angriest/angriest10.jpg')"];
  document.getElementById("main").style.backgroundImage=bigSize[random];
  var element = document.getElementById("angriest");
  element.classList.remove("hidden");

  var element = document.getElementById("angry");
  element.classList.add("hidden");

  var element = document.getElementById("angrier");
  element.classList.add("hidden");
  var element = document.getElementById("main");
  element.classList.add("duotone");

 
}

