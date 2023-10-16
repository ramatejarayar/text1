nose_X = 0;
nose_Y = 0;

wrist_R = 0;
wrist_L = 0;

Diff = 0;


function setup() 
{   
    canvas = createCanvas(300, 300);
    canvas.position(850, 200)
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.position(300, 200)


    poseNet = ml5.poseNet(video, gotPoses);
    poseNet.on('pose', gotPoses);
}

function draw() 
{
    background("pink");
    text("Ram", nose_X, nose_Y)
    textSize(Diff)
}   

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log(results);
        nose_X = results[0].pose.nose.x;
        nose_Y = results[0].pose.nose.y;
        console.log("nose x = " + nose_X);
        console.log("nose y = " + nose_Y);

        wrist_R = results[0].pose.rightWrist.x;
        wrist_L = results[0].pose.leftWrist.x;
        Diff = Math.floor(wrist_L - wrist_R);
        console.log("Difference = " +Diff);
        console.log("rightWrist = " + wrist_R);
        console.log("leftWrist = " + wrist_L);
    }



}

