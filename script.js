

//click listener for the game list
window.onload = function(){
  //alert("working");
  var game = document.getElementsByClassName("game")
  
  for(var i=0; i < game.length; i++){
      game[i].addEventListener('click', update);
  }
  
  
  
}

//update game function
function update(e){
  console.log(e);
  var id = e.target.getAttribute('data-game-id');
  var iframe = document.getElementsByTagName('iframe')[0]
  var url = "https://scratch.mit.edu/projects/" + id + "/embed/"
  
  iframe.setAttribute('src', url);

  
}

function greenFlag(){
  var iframe = document.querySelector('iframe');
  var preview = iframe.contentWindow.document.querySelector('.stage_green-flag-overlay-wrapper_2hUi_')
  //var preview = document.querySelector('.stage_green-flag-overlay-wrapper_2hUi_')
  var e = document.createEvent("Events");
  e.initEvent("click", true, false);
  //debugger;
  preview.dispatchEvent(e)
  
}

//var iframe = document.getElementById('iframeId');
//var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

//var test = document.querySelector('.stage_green-flag-overlay-wrapper_2hUi_')
//var e = document.createEvent("Events");
//e.initEvent("click", true, false);
//test.dispatchEvent(e)