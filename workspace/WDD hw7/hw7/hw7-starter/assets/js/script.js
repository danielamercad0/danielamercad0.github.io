function averageThreeNumbers(a, b, c) {
    let sum = a + b + c;
    let average = sum / 3;
    return average;
}

function createSentence(num, noun) {
    let sentence = "On average, a Berkeley student has" + " " + num + " " + noun + "s.";
    return sentence;
}

function getRandomNum(max) {
    return Math.random() * (max - 0) + 0;
}