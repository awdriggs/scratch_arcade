console.log('working');

window.onload = function(){
  //make the first link the selected on by default
  //get all the links
  // document.getElemen
  document.querySelector('.game').classList.add('selected');
  //add an event listener for the keyboard
  document.addEventListener("keyup", function(e){
    console.log('key', e.keyCode, e.key);
    //select the first list item inside the nav class
    //add the class of curent
    //if the key is up
      //remove the selected class from the current list item that has it
      //if the first is already selected, move to the last item
      //move up one list item
    var links = document.getElementsByClassName('game');
    var current;

    for(var i = 0; i < links.length; i++){
      if(links[i].classList.contains('selected')){
        console.log(i);
        current = i;
      } 
    }

    if(e.keyCode == 38 || e.key == "ArrowUp"){
      //remove the class on current link
      links[current].classList.remove('selected');
      if(current == 0){
       links[links.length-1].classList.add('selected');
      } else {
        links[current - 1].classList.add('selected');
      }
    }

    if(e.keyCode == 40 || e.key == "ArrowDown"){
      //remove the class on current link
      links[current].classList.remove('selected');
      if(current == links.length-1){
       links[0].classList.add('selected');
      } else {
        links[current + 1].classList.add('selected');
      }
    }
    //if the key is down
      //remove the selected class fromt he current list item that has it
      //if at the last item, move to the first
      //otherwise move down one list item

    //if the enter key is hti, keyCode 13
      //get the href of the a that is selected
      //send the window to that location
    if(e.keyCode == 65 || e.key == "a"){
      console.log('enter');
      var url = links[current].getAttribute('href')
      window.location.assign(url);
    }

    if(e.keyCode == 27 || e.key == "Escape"){
      console.log('escape to reload');
      location.reload();
    }

  });
}
