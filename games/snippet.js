document.addEvenListener("keyup", fucntion(e){
  if(e.key=="Escape" || e.keyCode=="27"){
    history.back();
  }
});
