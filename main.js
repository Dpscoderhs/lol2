function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/7umes6Ok9/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);

    } else {
        console.log(results);

        document.getElementById("result_label").innerHTML = 'I can here - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Detected Voice Of - ' + (results[0].confidence * 100).toFixed(2) + " %";


        img = document.getElementById('photo-1611915387288-fd8d2f5f928b.jpeg')
        img1 = document.getElementById('doggy.jpeg')

        if (result[0].label == 'barking') {
            img.src = 'doggy.jpeg';
        } else if (results[0].label == "meowing") {
            img.src = 'photo-1611915387288-fd8d2f5f928b.jpeg';

        }
    }
}