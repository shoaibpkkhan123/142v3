RightWristY = 0;
RightWristX=0;
scoreRightWrist=0;
function preload() 
{

}

function setup()
{ 
var canvas = createCanvas(700,600); 
canvas.parent('canvas'); video = createCapture(VIDEO); 
video.size(700, 600); 
video.hide(); 
poseNet = ml5.poseNet(video, modelLoaded); 
poseNet.on('pose', gotPoses); 
}
function draw()
{
    image(video, 0, 0, 700 ,600);
    if(scoreRightWrist > 0.2)
    {
        fill("red");
        stroke("red");
        circle(RightWristX, RightWristY, 30);
    }
}
function modelLoaded()
{
	console.log('Model Loaded!');
}
function gotPoses(results)
{
if(results.length >0)
{
	console.log(results);
    RightWristY= results[0].pose.rightWrist.y;
    RightWristX= results[0].pose.rightWrist.x;
    scoreRightWrist=results[0].pose.keypoints[10].score;
}
}

