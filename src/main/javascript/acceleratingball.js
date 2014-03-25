// This program simulates a ball bouncing up and down with gravity

// The code outside of the draw() function is executed ONCE
// at start time. These variables are available for use
// inside the draw() function (we call them "global"
// because they are available everywhere).

// The starting coordinates of our circle
var circleX = 200;
var circleY = 100;

var circleRadius = 50;

// The starting 'direction' of our circle. In other words,
// how much each coordinate will change with each re-draw
// of the screen. A better name might be 'speed' or 'velocity'.
var xVelocity = 0;
var yVelocity = 0;

// Downward acceleration: how much the velocity changes each
// unit of time. Positive
var gravity = 5;

// This function is executed repeatedly forever.
var draw = function() {

  // Clear the screen by drawing a white background
  background(255, 255, 255);

  // Actually draw the circle.
  ellipse(circleX, circleY, circleRadius * 2 , circleRadius * 2);

  // Everything after this point will be drawn on the NEXT screen draw

  // Adjust the yVelocity to account for gravity
  yVelocity += gravity;

  // Are we at the bottom of the screen? If so, reverse the direction
  if (circleY + circleRadius + yVelocity >= 400) {
    yVelocity *= -1;
  } else {
    circleY += yVelocity;
  }
};
