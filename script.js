const games = [ 
  {title:'Frogger', src:'games/frogger22.html', author:'adam', img: 'test.jpg'},
  {title:'Flappy Bird', src:'games/flappybird.html', author:'Izabella', img: 'test.jpg'},
  {title:'Slide Box', src:'games/slide-box.html', author:'Mokhina and Jaelyn', img: 'test.jpg'},
  {title:'Anti Gravity Chase', src:'games/Anti_gravity_Chase.html', author:'Julie, Caspia, Emma, and Isla', img: 'test.jpg'},
  {title:'Frogger', src:'games/ada_frogger.html', author:'Ada', img: 'test.jpg'},
  {title:'Lightning Run', src:'games/akira_lightingrun.html', author:'Akira', img: 'test.jpg'},
  {title:'Dino Dash', src:'games/Daisy_Dino_Madness.html', author:'Daisy', img: 'test.jpg'},
  {title:'Devin Wants Bread', src:'games/Devin_wants_bread_Dashiell.html', author:'Dashiell', img: 'test.jpg'},
  {title:'Doughnut Maze', src:'games/Doughnut_Maze.html', author:'???', img: 'test.jpg'},
  {title:'Fairy Forest', src:'games/FairyForest.html', author:'Georgia?', img: 'test.jpg'},
  {title:'Fairy Forest', src:'games/FairyForest.html', author:'Georgia?', img: 'test.jpg'},
  {title:'Flappy Bird', src:'games/flappy_jehan.html', author:'Jehan', img: 'test.jpg'},
  {title:'Frog Night', src:'games/Frog_Knight.html', author:'???', img: 'test.jpg'},
  {title:'Find the Ball', src:'games/Jemma_FindTheBall.html', author:'Jemma', img: 'test.jpg'},
  {title:'Mario, but Bad', src:'games/MarioButBad.html', author:'???', img: 'test.jpg'},
  {title:'Maze!', src:'games/Maze!.html', author:'???', img: 'test.jpg'},
  {title:'Maze', src:'games/MAZE.html', author:'Fern?', img: 'test.jpg'},
  {title:'Snake', src:'games/snake.html', author:'???', img: 'test.jpg'},
  {title:"Bob's Pellets", src:'games/bobs_pellets.html', author:'???', img: 'test.jpg'},
  {title:"Once Upon a Rumple", src:'games/once_upon_a_rumple.html', author:'???', img: 'test.jpg'},
  {title:"Space Chase", src:'games/space_chase.html', author:'???', img: 'test.jpg'},
  {title:"Duck the Duck", src:'games/duck_the_duck.html', author:'???', img: 'test.jpg'},
  {title:"Undertale Fan Game", src:'games/yerik.html', author:'Yerik', img: 'test.jpg'},
  {title:"Captain Marvel vs. Scarlett Witch", src:'games/CaptinMarvelVSScarlettWitch.html', author:'Zosia', img: 'test.jpg'},
]

var current = 0;

window.onload = function(){
  update(current);

  document.addEventListener("keyup", function(e){
  console.log('key', e.keyCode, e.key);
   
    console.log("before", current);

    if(e.keyCode == 37 || e.key == "ArrowLeft"){
      console.log("left"); 
      if(current == 0){
        current = games.length-1;
      } else {
        current--;
      }
    }

    if(e.keyCode == 39 || e.key == "ArrowRight"){
      //remove the class on current link
      // links[current].classList.remove('selected');
      if(current == games.length-1){
       // links[0].classList.add('selected');
        current = 0;
      } else {
        current++;
      }
    }

    console.log("after", current);
    update(current);

    if(e.keyCode == 65 || e.key == "a"){
      console.log('enter');
      var url = games[current].src;
      window.location.assign(url);
    }

    if(e.keyCode == 27 || e.key == "Escape"){
      console.log('escape to reload');
      location.reload();
    }
  });
}
 
//update function, update the card!
function update(index){
  console.log('update');
  //update the main card
  var card = document.querySelector(".game-card");
  card.querySelector('a').href = games[current].src;
  card.querySelector('h3').innerText = games[current].title; 
  card.querySelector('p').innerText = games[current].author;
}
