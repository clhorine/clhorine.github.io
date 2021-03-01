
function randombg1(){
  var random= Math.floor(Math.random() * 10) + 0;
  var bigSize = ["url('angryimages/angry/angry01.jpg')",
                 "url('angryimages/angry/angry02.jpg')",
                 "url('angryimages/angry/angry03.jpg')",
                 "url('angryimages/angry/angry04.jpg')",
                 "url('angryimages/angry/angry05.jpg')",
                 "url('angryimages/angry/angry06.jpg')",
                 "url('angryimages/angry/angry07.jpg')",
                 "url('angryimages/angry/angry08.jpg')",
                 "url('angryimages/angry/angry09.jpg')",
                 "url('angryimages/angry/angry10.jpg')"];
  document.getElementById("main").style.backgroundImage=bigSize[random];
  
  var element = document.getElementById("angry");
  element.classList.remove("hidden");
  var element = document.getElementById("angriest");
  element.classList.add("hidden");
  var element = document.getElementById("angrier");
  element.classList.add("hidden");
  
  var element = document.getElementById("main");
  element.classList.add("duotone");
  var element = document.getElementById("main");
  element.classList.remove("moreduo");
  var element = document.getElementById("main");
  element.classList.remove("mostduo");
 
 
}


function randombg2(){
  var random= Math.floor(Math.random() * 10) + 0;
  var bigSize = ["url('angryimages/angrier/angrier01.jpg')",
                 "url('angryimages/angrier/angrier02.jpg')",
                 "url('angryimages/angrier/angrier03.jpg')",
                 "url('angryimages/angrier/angrier04.jpg')",
                 "url('angryimages/angrier/angrier05.jpg')",
                 "url('angryimages/angrier/angrier06.jpg')",
                 "url('angryimages/angrier/angrier07.jpg')",
                 "url('angryimages/angrier/angrier08.jpg')",
                 "url('angryimages/angrier/angrier09.jpg')",
                 "url('angryimages/angrier/angrier10.jpg')"];
  document.getElementById("main").style.backgroundImage=bigSize[random];
  var element = document.getElementById("angrier");
  element.classList.remove("hidden");
  var element = document.getElementById("angry");
  element.classList.add("hidden");
  var element = document.getElementById("angriest");
  element.classList.add("hidden");

  var element = document.getElementById("main");
  element.classList.remove("duotone");
  var element = document.getElementById("main");
  element.classList.remove("mostduo");
  var element = document.getElementById("main");
  element.classList.add("moreduo");
  

}

function randombg3(){
  var random= Math.floor(Math.random() * 10) + 0;
  var bigSize = ["url('angryimages/angriest/angriest01.jpg')",
                 "url('angryimages/angriest/angriest02.jpg')",
                 "url('angryimages/angriest/angriest03.jpg')",
                 "url('angryimages/angriest/angriest04.jpg')",
                 "url('angryimages/angriest/angriest05.jpg')",
                 "url('angryimages/angriest/angriest06.jpg')",
                 "url('angryimages/angriest/angriest07.jpg')",
                 "url('angryimages/angriest/angriest08.jpg')",
                 "url('angryimages/angriest/angriest09.jpg')",
                 "url('angryimages//angriest/angriest10.jpg')"];
  document.getElementById("main").style.backgroundImage=bigSize[random];
  var element = document.getElementById("angriest");
  element.classList.remove("hidden");
  var element = document.getElementById("angry");
  element.classList.add("hidden");
  var element = document.getElementById("angrier");
  element.classList.add("hidden");

  var element = document.getElementById("main");
  element.classList.remove("duotone");
  var element = document.getElementById("main");
  element.classList.remove("moreduo");
  var element = document.getElementById("main");
  element.classList.add("mostduo");
  

}

