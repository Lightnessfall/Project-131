objectDetector = '';
game_status = '';
object = [];

function preload(){
    img = loadImage("dog_cat.jpg");
}
function setup(){
    canvas = createCanvas(800, 500);
    canvas.position(600, 300);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting objects";
}
function modelLoaded(){
    console.log("Model is loaded");
    objectDetector.detect(img, gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}
function draw(){
     image(img, 0, 0, 800, 500);
    //stroke("red");
    //noFill()
    //rect(50, 100, 350, 300);
    //text("Dog", 25, 85);
    //stroke("blue");
    //rect(350, 100, 350, 300);
    //text("Cat", 715, 85)
}