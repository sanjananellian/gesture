
Webcam.set({
    width:350,
    height:300,
    imageformat:"png",
    pngquality:90
});
camera=document.getElementById("camera")
Webcam.attach("#camera")

function takepic(){
Webcam.snap(function(datauri){
 document.getElementById("result").innerHTML="<img id='img1' src= "+datauri+">"

})
}
console.log("ml5 version:",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/SUQPMFBPi/model.json",modelloaded)
function modelloaded(){
    console.log("model loaded")
}
prediction1=""
prediction2=""
function speak(){
    var synth=window.speechSynthesis
    speakdata1="prediction1"+prediction1
    speakdata2="prediction2"+prediction2
    var utterthis=new SpeechSynthesisUtterance(speakdata1+speakdata2)
    synth.speak(utterthis)
}

function check(){
   img=document.getElementById("img1")
   classifier.classify(img,gotResult)

}
function gotResult(error,results){
    if (error) {
     console.error(error)   
    } else {
        console.log(results)
        document.getElementById("ren").innerHTML=results[0].label
        document.getElementById("ren2").innerHTML=results[1].label
        prediction1=results[0].label
        prediction2=results[1].label
        speak()
        if (prediction1=="okay") {
           document.getElementById("update").innerHTML="&#128077;"
        }

           if (prediction1=="vulcan salute") {
            document.getElementById("update").innerHTML="&#128406;"
         }
         if (prediction1=="call me") {
            document.getElementById("update").innerHTML="&#129305;"
         }
         if (prediction1=="love you") {
            document.getElementById("update").innerHTML="&#129311;"
         }
         if (prediction1=="relax") {
            document.getElementById("update").innerHTML="&#129292;"
         }
         if (prediction2=="okay") {
            document.getElementById("update2").innerHTML="&#128077;"
         }
 
            if (prediction2=="vulcan salute") {
             document.getElementById("update2").innerHTML="&#128406;"
          }
          if (prediction2=="call me") {
             document.getElementById("update2").innerHTML="&#129305;"
          }
          if (prediction2=="love you") {
             document.getElementById("update2").innerHTML="&#129311;"
          }
          if (prediction2=="relax") {
             document.getElementById("update2").innerHTML="&#129292;"
          }

       
        
        
    
    }

}





