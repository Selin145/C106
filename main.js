// https://teachablemachine.withgoogle.com/models/wXIYWAMu4/

function startClassification()
    {
        navigator.mediaDevices.getUserMedia({audio: true});
        classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/wXIYWAMu4/model.json', modelReady);

    }
    function modelReady(){
        classifier.classify(gotResults);
    }
