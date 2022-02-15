document.addEventListener("keyup", function(e){
  if(e.key=="Escape" || e.keyCode=="27"){
    history.back();
  }
});
