rightWristX = 0;
leftWristX = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function draw(){
    background('#969A7');
    document.getElementById("font_size").innerHTML = "The Font Size Will Be = " +difference+"px"
     textSize(difference);
     fill('#e394b7');
     text('TANVI BHATIA', 20,200);



}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results){
  if (results.length > 0){
 console.log(results);
 leftWristX = results[0].pose.leftWrist.x;
 rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX);

console.log("leftWrist =" +leftWrist+"rightWristX =" +rightWristX+"difference = " +difference);

  }

}