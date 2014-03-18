/*
 * This function randomly chooses between two inputs and
 * returns it. Each has a 50% chance of being returned.
 */
var getOneOrTheOther = function(one, theOther) {
  var r = random(0, 1);
  if (r <= 0.5) {
    return one;
  } else {
    return theOther;
  }
};

// The code outside of the draw() function is executed ONCE
// at start time. These variables are available for use
// inside the draw() function (we call them "global" 
// because they are available everywhere).

// The starting coordinates of our circle
var circleX = random(0, 400);
var circleY = random(0, 400);

// The starting 'direction' of our circle. In other words,
// how much each coordinate will change with each re-draw
// of the screen. A better name might be 'speed' or 'velocity'. 
var directionX = -1;
var directionY = -1;

// This function is executed repeatedly forever.
var draw = function() {
  // Clear the screen by drawing a white background
  background(255, 255, 255);
  
  // Check if our circle is at the edge of the screen. If it is,
  // change the direction appropriately.
  if (circleX >= 400) {
    directionX = getOneOrTheOther(-0.9, -0.1);
  } else if (circleX <= 0) {
    directionX = getOneOrTheOther(0.1, 0.9);
  } else if (circleY >= 400) {
    directionY = getOneOrTheOther(-0.9, -0.1);
  } else if (circleY <= 0) {
    directionY = getOneOrTheOther(0.1, 0.9);
  }
  
  // Change the position of the circle based on the direction
  // it is currently traveling.
  circleX += directionX;
  circleY += directionY;

  // The next two lines are for debugging. Uncomment them to see what
  // the direction variables are currently set to.
  // println("DirectionX is " + directionX);
  // println("DirectionY is " + directionY);

  // Actually draw the circle.
  ellipse(circleX, circleY, 100, 100);
};


