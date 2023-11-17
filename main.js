function startClassification()
{
    navigator.mediaDevices.getDisplayMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/XSipLvQmK/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResult);
}

function gotResult(error,result)
{
    if(error)
    {
        console.error(error);
    }else
    {
        console.log(result);
    }
}