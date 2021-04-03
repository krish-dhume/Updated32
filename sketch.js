const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,datetime;

var bg;

function preload() {
    
    backgroundImg=loadImage("sunrise1.png")
    
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
if(backgroundImg){
   background(backgroundImg);
}
    Engine.update(engine);

    // write code to display time in correct format here
    textSize(50)
    fill("black")
    text("Time:"+hour()+":"+minute()+":"+second(),800,50)
}

async function getBackgroundImg(){

    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata")
    var responseJSON=await response.json();
   var datetime=responseJSON.datetime;
    var hour=datetime.slice(11,13)
    console.log(hour);
    if(hour>=04 && hour<=06){
        bg="sunrise1.png"
    }
    else if(hour>=6 && hour<=8){
        bg="sunrise2.png";     

    }
    else if(hour>=8 && hour<=10){
        bg="sunrise3.png";
    }
    else if(hour>=10 && hour<=12){
        bg="sunrise4.png ";
    }
    else if(hour>=12 && hour<=14){
        bg="sunrise5.png";
    }

    else if(hour>=14 && hour<=16){
        bg="sunrise6.png";
    }
    else if(hour>=16 && hour<=18){
        bg="sunset7.png";
    }
    else if(hour>=18 && hour<=20){
        bg="sunset8.png";
    }
    else if(hour>=20 && hour<=22){
        bg="sunset10.png";
    }
    else if(hour>=22 && hour<=00){
        bg="sunset11.png";
    }
    else{
        bg="sunset12.png";
    }
    backgroundImg=loadImage(bg)
}
