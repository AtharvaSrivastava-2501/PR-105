Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
})
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="captured_image">';
    });
}
console.log("ml5 version:", ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/mSPhNEII1/model.json',model_loaded);

function model_loaded(){
    console.log("model loaded");
}
function identify_snapshot(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotresult);
    }
    function gotresult(error,results){
        if(error){
            console.log(error);
        }
        else{
            console.log(results);
            document.getElementById("name").innerHTML=results[0].label;
            document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);
        }
    }
    