//test of the arcade buttons for the raspberry pi
function setup() {
  createCanvas(800, 400);

}

function draw() {
  background(200);

  fill(120);
  if (keyIsDown(LEFT_ARROW)) {
    fill('red');
  }
  triangle(width / 4 - 150, height / 2, width / 4 - 75, height / 2 + 75, width / 4 - 75, height / 2 - 75);

  fill(120);
  if (keyIsDown(RIGHT_ARROW)) {
    fill('red');
  }
  triangle(width / 4 + 150, height / 2, width / 4 + 75, height / 2 + 75, width / 4 + 75, height / 2 - 75);


  fill(120);
  if (keyIsDown(UP_ARROW)) {
    fill('red');
  }
  triangle(width / 4, height / 2 - 150, width / 4 + 75, height / 2 - 75, width / 4 - 75, height / 2 - 75);

  fill(120);
  if (keyIsDown(DOWN_ARROW)) {
    fill('red');
  }
  triangle(width / 4, height / 2 + 150, width / 4 + 75, height / 2 + 75, width / 4 - 75, height / 2 + 75);

  fill(120);
  if (keyIsDown(LEFT_ARROW)) {
    fill('red');
  }

  fill(120);
  if (keyIsDown(83)) {
    fill('yellow');
  }
  ellipse(width / 4 * 3, height / 2 + 100, 100, 100);

  fill(120);
  if (keyIsDown(65)) {
    fill('blue');
  }
  ellipse(width / 4 * 3 - 100, height / 2, 100, 100);

  fill(120);
  if (keyIsDown(87)) {
    fill('green');
  }
  ellipse(width / 4 * 3, height / 2 - 100, 100, 100);

  fill(120);
  if (keyIsDown(68)) {
    fill('red');
  }
  ellipse(width / 4 * 3 + 100, height / 2, 100, 100);
}



function keyPressed() {

  console.log(key + " " + keyCode);
}

function keyReleased() {
  if(key == "Escape") {
    // window.location.assign("../index.html")
  window.history.go(-1)
    // window.history.back();
    //window.history.go(-1)
    return false; // prevent any default behavior
  }
}
