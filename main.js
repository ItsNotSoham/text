function setup(){
    c1=createCanvas(600,600)
    v1=createCapture(VIDEO)
    c1.position(1200,150)
    v1.position(100,150)
    mymodel=ml5.poseNet(v1,modelLoaded)
    mymodel.on('pose',gotPoses)
}

function modelLoaded(){
    console.log("Ma copy nahi karta hu aur chor toh bilkul hi nahi hu")

}
nosex=0
nosey=0
lwx=0
rwx=0
dif=0
function gotPoses(results){
    if(results.length>0)
    {console.log(results)
    nosex=results[0].pose.nose.x
    nosey=results[0].pose.nose.y
    lwx=results[0].pose.leftWrist.x
    rwx=results[0].pose.rightWrist.x
    dif=lwx-rwx
    }
}

function draw() {
    
sui=document.getElementById("lol").value
    background("red");
    fill("white");
    text(sui, nosex, nosey); 
    textSize(dif)
}