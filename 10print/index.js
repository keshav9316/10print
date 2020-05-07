let x=y=0;
let space=50;
function setup(){
 createCanvas(windowWidth,windowHeight);
 background(55);
}
function draw(){
    stroke(255);
    textSize(32);
    if(random(0,5)>2.5){
    line(x,y,x+space,y+space);
    } else {
    line(x,y+space,x+space,y);
}
x+=space;
if(x>width){
    x=0;
    y+=space;
}
}