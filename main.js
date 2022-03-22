folk = "";
ukele = "";

LWristX = 0;
LWristY = 0;

RWristY = 0;
RWristX = 0;

function preload() {
    folk = "Folk.mp3";
    ukele ="Ukele.mp3";
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('Poses', gotPoses);
}

function modelLoaded() {
    console.log("Model Loaded!");
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function gotPoses(results) {
    if(results.length > 0){
        console.log(results);

        LWristX = results[0].pose.leftWrist.x;
        LWristY = results[0].pose.leftWrist.y;

        RWristY = results[0].pose.rightWrist.y;
        RWristX = results[0].pose.rightWrist.x;

        console.log("RWY = " + RWristY + "RWX = " + RWristX + "LW X n Y = " + LWristX + LWristY);
    }

}