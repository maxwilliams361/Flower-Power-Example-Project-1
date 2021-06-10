function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(1);
}

function draw() {
    
    // Using the random function:
    // Modify these variables to choose a random color! 
    var r = random(255);
    var g = 220; 
    var b = 235;

    //Using the color function:
    //Create a random color using your red, green and blue values 
    var randomColor;
    //answer:   var randomColor=color(r,g,b);
    
    // Using the random function:
    // Modify this variable to choose a random color!    
    var petalSize; 

    // Change the parameter to your randomColor!
    fill("blue");
   //answer= fill(randomColor);
    // Change the parameter to your petalSize! 
    drawFlower(20);

}

// function draws a flower of size "petalSize" pixels in a random location. 
function drawFlower(petalSize) {
    var flowerCenterX = random(width);
    var flowerCenterY = random(height);
    ellipse(flowerCenterX - petalSize / 2, flowerCenterY - petalSize / 2, petalSize, petalSize);
    ellipse(flowerCenterX + petalSize / 2, flowerCenterY - petalSize / 2, petalSize, petalSize);
    ellipse(flowerCenterX - petalSize / 2, flowerCenterY + petalSize / 2, petalSize, petalSize);
    ellipse(flowerCenterX + petalSize / 2, flowerCenterY + petalSize / 2, petalSize, petalSize);
    fill("yellow");
    ellipse(flowerCenterX, flowerCenterY, petalSize, petalSize);

}
